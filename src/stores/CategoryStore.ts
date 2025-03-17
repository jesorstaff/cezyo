import { makeAutoObservable, runInAction } from "mobx"
import axios from "axios"

class CategoryStore {
  categories: any[] = []
  selectedCategoryId: number[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async fetchCategories() {
    const response = await axios.get("https://test2.sionic.ru/api/Categories")
    runInAction(() => {
      this.categories = response.data
    })
  }

  selectCategory(id: number | null) {
    if (id === null) {
      this.selectedCategoryId = []
    } else if (this.selectedCategoryId?.includes(id)) {
      this.selectedCategoryId = this.selectedCategoryId.filter(
        (item) => item !== id
      )
    } else {
      this.selectedCategoryId?.push(id)
    }
  }
}

export default new CategoryStore()
