import { Outlet } from 'react-router-dom'
import { Header } from '@/modules/Header/Header'
import { Footer } from '@/modules/Footer/Footer'

export const Layout = () => {
  return (
    <>
      <Header />
      <section role='main'>
        <Outlet />
      </section>
      <Footer />
    </>
  )
}
export default Layout
