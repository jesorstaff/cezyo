import MainLayout from "../layouts/MainLayout"
import Title from "../components/Title"
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
        <div className="flex gap-1.5 mt-5">
          <div className="rounded-full border border-black px-2.5 h-6 flex items-center text-sm cursor-pointer">
            Все товары
          </div>
          <div className="rounded-full border border-black px-2.5 text-sm cursor-pointer">
            Игрушка
          </div>
          <div className="rounded-full border border-black px-1 text-sm cursor-pointer">
            Мартышка
          </div>
          <div className="rounded-full border border-black px-1 text-sm cursor-pointer">
            Мишка
          </div>
          <div className="rounded-full border border-black px-1 text-sm cursor-pointer">
            Подарок
          </div>
          <div className="rounded-full border border-black px-1 text-sm cursor-pointer">
            Подарок коллегам
          </div>
          <div className="rounded-full border border-black px-1 text-sm cursor-pointer">
            День Рождения
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default CategoryPage
