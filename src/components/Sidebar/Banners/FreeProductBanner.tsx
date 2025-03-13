import FreeProductBannerImage from "../images/BagsImage.svg"

const FreeProductBanner = () => {
  return (
    <div className="w-full p-4 border border-main-pink rounded-lg flex items-center first:mt-0 mt-4">
      <img
        src={FreeProductBannerImage}
        alt="free-product-banner"
        className="-ml-7.5"
      />
      <div className="ml-[17px]">
        <p className="text-main-blue text-bold text-xl/[120%]">
          Получай товары БЕСПЛАТНО!
        </p>
        <div className="text-white bg-main-blue rounded-full py-2.5 px-6 mt-2.5 cursor-pointer">
          Узнать подробнее
        </div>
      </div>
    </div>
  )
}

export default FreeProductBanner
