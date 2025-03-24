import { createContext } from "react"
import ProductsStore from "./ProductsStore"

export const stores = {
  ProductsStore,
}

export const StoreContext = createContext<typeof stores>(stores)