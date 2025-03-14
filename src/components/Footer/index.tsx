import Facebook from "../../assets/images/Fb.svg"
import Vk from "../../assets/images/Vk.svg"
import Instagram from "../../assets/images/Instagram.svg"
import GooglePlay from "../../assets/images/GooglePlay.svg"
import AppStore from "../../assets/images/AppStore.svg"

const Footer = () => {
  return (
    <footer className="bg-main-beige">
      <div className="max-w-[1366px] w-full mx-auto py-8 px-13">
        <div className="flex justify-between">
          <div className="text-4xl font-bold">React</div>
          <div className="flex gap-8">
            <div>
              <p>Присоединяйтесь к нам</p>
              <ul className="flex gap-2 items-center mt-2.5">
                <li>
                  <a href="#">
                    <img src={Facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Vk} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Instagram} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p>Устанавливайте приложение</p>
              <div className="flex gap-2 mt-2.5">
                <img src={GooglePlay} alt="" />
                <img src={AppStore} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-15 flex justify-center">
          <div className="flex gap-2 items-center text-main-gray-medium">
            <p>© Sionic</p>
            <a href="#">Правовая информация</a>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
