import { makeAutoObservable, runInAction } from "mobx"
import axios from "axios"

class CategoryStore {
  categories: any[] = []
  selectedCategoryId: number | null = null

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
    this.selectedCategoryId = id
  }
}

export default new CategoryStore()
