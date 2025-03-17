import { makeAutoObservable, runInAction } from "mobx"
import axios from "axios"
import { IProduct } from "../interfaces"

class ProductsStore {
  products: IProduct[] = []
  productImages: { [key: number]: string[] } = {}
  isLoading: boolean = false
  currentRange: [number, number] = [0, 15]
  hasMore: boolean = true

  constructor() {
    makeAutoObservable(this)
  }

  async fetchProducts(
    categoryId: number[] | null,
    // range: [number, number] = this.currentRange
    loadMore: boolean = false
  ) {
    if (this.isLoading || !this.hasMore) return

    this.isLoading = true

    const filter =
      categoryId && categoryId.length > 0 ? { category_id: categoryId } : {}

    const range = loadMore ? this.currentRange : [0, 15]

    try {
      const response = await axios.get("https://test2.sionic.ru/api/Products", {
        params: {
          range: JSON.stringify(range),
          filter: JSON.stringify(filter),
        },
      })
      runInAction(() => {
        if (loadMore) {
          this.products = [...this.products, ...response.data]
        } else {
          this.products = response.data
        }

        this.currentRange = [range[1], range[1] + 15]
        this.hasMore = response.data.length === 16
      })

      // await this.fetchProductImages(this.products.map((product) => product.id))
      const newProductIds = response.data
        .map((product: IProduct) => product.id)
        .filter((id: number) => !this.productImages[id])

      if (newProductIds.length > 0) {
        await this.fetchProductImages(newProductIds)
      }
    } catch (error) {
      console.error("Ошибка при запросе товаров:", error)
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }

  async fetchProductImages(productIds: number[]) {
    if (productIds.length === 0) return

    const response = await axios.get(
      "https://test2.sionic.ru/api/ProductImages",
      {
        params: {
          filter: JSON.stringify({ product_id: productIds }),
        },
      }
    )

    runInAction(() => {
      response.data.forEach((image: any) => {
        if (!this.productImages[image.product_id]) {
          this.productImages[image.product_id] = []
        }
        if (!this.productImages[image.product_id].includes(image.image_url)) {
          this.productImages[image.product_id].push(image.image_url)
        }
      })
    })
  }
}

export default new ProductsStore()
