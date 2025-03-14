export interface ICategories {
  id: number
  name: string
  parentId: number
}

export interface IProduct {
  id: number
  category_id: number
  name: string
  description: string
}
