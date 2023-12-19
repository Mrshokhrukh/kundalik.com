import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout