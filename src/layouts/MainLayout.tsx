import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="max-w-[1366px] w-full mx-auto">
        <div className="grid grid-cols-[auto_1px_350px]">
          <div>
            <Header />
            <div className="px-13 py-5 min-h-svh">{children}</div>
          </div>
          <div className="w-[1px] h-full bg-[#F0F4FB]"></div>
          <div className="p-5">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
