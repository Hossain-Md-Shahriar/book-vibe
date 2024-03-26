import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

const MainLayout = () => {
  return (
    <div className="max-w-[1230px] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout
