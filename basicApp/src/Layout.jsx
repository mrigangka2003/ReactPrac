import { Footer, Header } from "./components/compo"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout