import { makeAutoObservable, runInAction } from "mobx"
import axios from "axios"
import { IProduct } from "../interfaces"

class ProductsStore {
  products: IProduct[] = []
  productImages: { [key: number]: string[] } = {}
  isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  async fetchProducts(
    categoryId: number | null,
    range: [number, number] = [0, 15]
  ) {
    this.isLoading = true
    const filter = categoryId ? { category_id: categoryId } : {}
    const response = await axios.get("https://test2.sionic.ru/api/Products", {
      params: {
        range: JSON.stringify(range),
        filter: JSON.stringify(filter),
      },
    })
    runInAction(() => {
      this.products = response.data
    })

    await this.fetchProductImages(this.products.map((product) => product.id))
    runInAction(() => {
      this.isLoading = false
    })
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

    response.data.forEach((image: any) => {
      if (!this.productImages[image.product_id]) {
        this.productImages[image.product_id] = []
      }
      runInAction(() => {
        this.productImages[image.product_id].push(image.image_url)
      })
    })
  }
}

export default new ProductsStore()
