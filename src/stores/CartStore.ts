import { makeAutoObservable } from "mobx"

class CartStore {
  constructor() {
    makeAutoObservable(this)
  }
}

export default new CartStore()
