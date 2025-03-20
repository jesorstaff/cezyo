import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import categoryStore from "../../stores/CategoryStore"
import productsStore from "../../stores/ProductsStore"

const colors = ["#2967FF", "#58CF18", "#FFA601", "#FF7CB4"]

const CategoryList = observer(() => {
  useEffect(() => {
    categoryStore.fetchCategories()
  }, [])

  const changeCategory = (categoryId: number | null) => {
    categoryStore.selectCategory(categoryId)
    productsStore.fetchProducts(categoryStore.selectedCategoryId)
  }

  return (
    <>
      <div className="flex gap-1.5 mt-5 overflow-x-auto scrollbar-hide">
        <div
          className="rounded-full border border-black px-2.5 h-6 flex items-center flex-shrink-0 text-sm cursor-pointer"
          onClick={() => changeCategory(null)}
        >
          Все товары
        </div>
        {categoryStore.categories.map((category, index) => (
          <div
            style={{ backgroundColor: colors[(index + 1) % colors.length] }}
            className="rounded-full text-white px-2.5 h-6 flex items-center flex-shrink-0 text-sm cursor-pointer"
            key={category.id}
            onClick={() => changeCategory(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>
    </>
  )
})

export default CategoryList
