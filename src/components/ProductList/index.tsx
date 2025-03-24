import { useEffect, useContext } from "react"
import { observer } from "mobx-react-lite"
// import productsStore from "../../stores/ProductsStore"
import categoryStore from "../../stores/CategoryStore"
import { StoreContext } from "../../stores"

const ProductList = observer(() => {
  const {ProductsStore} = useContext(StoreContext)
  // const [isFetching, setIsFetching] = useState(false)


  useEffect(() => {
    ProductsStore.fetchProducts(categoryStore.selectedCategoryId) // TODO: получили товары, по категориям
  }, [categoryStore.selectedCategoryId])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight

      if (
        scrollTop + clientHeight >= scrollHeight - 100 &&
        !ProductsStore.isLoadingScroll
      ) {
        ProductsStore.fetchScrollProducts()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [ProductsStore.isLoadingScroll])

  if (ProductsStore.isLoading) {
    return <div>Loading...</div>
  }

  // console.log("productsStore.products", productsStore.products)

  return (
    <div className="grid grid-cols-4 gap-5 gap-y-7.5 mt-5 mb-32.5">
      {ProductsStore.products.map((product) => {
        const category = categoryStore.categories.find(
          (cat) => cat.id === product.category_id,
        )
        return (
          <div key={product.id}>
            <div className="relative">
              {ProductsStore.productImages[product.id] && (
                <img
                  src={ProductsStore.productImages[product.id][0]}
                  alt={product.name}
                  className="w-full h-[138px] object-contain"
                />
              )}
              <div
                className="absolute left-2.5 bottom-3.5 bg-main-blue text-white rounded-full px-2.5 h-6 flex items-center flex-shrink-0 text-sm cursor-pointer">
                {category?.name}
              </div>
            </div>
            <div className="mt-1.5">
              <div className="text-sm/[140%] w-full text-ellipsis overflow-hidden whitespace-nowrap">
                {product.name}
              </div>
              <div>
                <div className="text-xl/[130%] text-main-blue font-semibold">
                  от 350 000 ₽
                </div>
                <div className="flex items-center gap-3.5">
                  <span className="text-sm/[122%] text-main-gray-medium line-through">
                    450 500 ₽
                  </span>
                  <p className="font-semibold text-xl/[140%] text-main-pink">
                    -10%
                  </p>
                </div>
                <button
                  className="text-main-blue rounded-full border border-main-blue py-2.5 px-6 mt-2.5 cursor-pointer text-sm/[140%]">
                  Добавить в корзину
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
})

export default ProductList
