import Search from "./Search"
import Profile from "./Profile"
import Cart from "./Cart"

const Header = () => {
  return (
    <div className="flex items-center px-13 py-5">
      <div className="text-4xl font-bold">React</div>
      <div className="text-sm text-main-gray ml-6 cursor-pointer">
        История заказов
      </div>
      <div className="ml-auto">
        <Search />
      </div>
      <div className="ml-4">
        <Cart />
      </div>
      <div className="ml-4">
        <Profile />
      </div>
    </div>
  )
}

export default Header
