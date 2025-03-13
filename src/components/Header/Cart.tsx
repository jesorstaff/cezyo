import CartIcon from "../../assets/images/CartIcon.svg"

const Cart = () => {
  return (
    <div className="relative flex items-center justify-center border border-main-gray rounded-full w-[50px] h-[50px]  cursor-pointer">
      <img src={CartIcon} alt="cart" />
      <div className="absolute right-[-10px] top-[-10px] w-8 h-8 rounded-full flex items-center justify-center text-sm text-main-blue bg-white pl-[5px] pb-[2px]">
        10+
      </div>
    </div>
  )
}

export default Cart
