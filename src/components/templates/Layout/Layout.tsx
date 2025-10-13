import { Outlet } from "react-router-dom"
import Header from "../../organism/Header/Header"
import { Container } from "@mui/material"


const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout