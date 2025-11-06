import { Outlet } from "react-router-dom";
import Header from "../../Layouts/Header/Header"

export const AnyPage = () => {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default AnyPage;