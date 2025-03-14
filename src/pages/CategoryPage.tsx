import MainLayout from "../layouts/MainLayout"
import Title from "../components/Title"
import CategoryList from "../components/CategoryList"
import ProductList from "../components/ProductList"

const CategoryPage = () => {
  return (
    <MainLayout>
      <div className="mt-7.5">
        <div className="flex items-center">
          <Title>Категории товаров</Title>
          <div className="text-main-blue text-xs ml-24 cursor-pointer">
            Настройки
          </div>
        </div>
        <CategoryList />
        <ProductList />
      </div>
    </MainLayout>
  )
}

export default CategoryPage
