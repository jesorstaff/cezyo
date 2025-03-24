import { makeAutoObservable, runInAction } from "mobx"
import axios from "axios"
import { IProduct } from "../interfaces"

class ProductsStore {
  products: IProduct[] = []
  productImages: { [key: number]: string[] } = {}
  isLoading: boolean = false
  currentRange: [number, number] = [0, 15]
  isLoadingScroll: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  async fetchProducts(categoryId: number[] | null) {
    this.isLoading = true

    const filter =
      categoryId && categoryId.length > 0 ? { category_id: categoryId } : {}

    try {
      const response = await axios.get("https://test2.sionic.ru/api/Products", {
        params: {
          range: JSON.stringify(this.currentRange),
          filter: JSON.stringify(filter),
        },
      })

      runInAction(() => {
        this.products = response.data
      })

      await this.fetchProductImages(this.products.map((product) => product.id))
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

    try {
      const response = await axios.get(
        "https://test2.sionic.ru/api/ProductImages",
        {
          params: {
            filter: JSON.stringify({ product_id: productIds }),
          },
        }
      )

      runInAction(() => {
        response.data.forEach(
          (image: { product_id: number; image_url: string }) => {
            if (!this.productImages[image.product_id]) {
              this.productImages[image.product_id] = []
            }
            if (
              !this.productImages[image.product_id].includes(image.image_url)
            ) {
              this.productImages[image.product_id].push(image.image_url)
            }
          }
        )
      })
    } catch (error) {
      console.error("Ошибка при запросе изображений товаров:", error)
    }
  }

  async fetchScrollProducts() {
    this.isLoadingScroll = true

    // const range = [this.currentRange[1] + 1, this.currentRange[1] + 16] // [16, 30]
    const range = this.currentRange

    try {
      const response = await axios.get("https://test2.sionic.ru/api/Products", {
        params: {
          range: JSON.stringify(range),
        },
      })

      const newProducts = response.data.filter(
        (item: IProduct) =>
          !this.products.some((element) => element.id === item.id)
      )

      runInAction(() => {
        if (response.data.length === 0) return

        this.products = [...this.products, ...newProducts]

        if (response.data.length > 0) {
          console.log("this.currentRange", this.currentRange)
          this.currentRange = [range[1] + 1, range[1] + 16]
        }
      })

      await this.fetchProductImages(newProducts.map((product:IProduct) => product.id))
    } catch (error) {
      console.error(
        "Ошибка при запросе подгружаемых товаров во время скролла:",
        error
      )
    } finally {
      runInAction(() => {
        this.isLoadingScroll = false
      })
    }
  }
}

export default new ProductsStore()
