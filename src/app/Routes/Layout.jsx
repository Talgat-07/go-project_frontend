import { Outlet } from 'react-router-dom'
import { Header } from '../../modules/Header/Header'
import { Footer } from '../../modules/Footer/Footer'

export const Layout = () => {
  return (
    <main>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </main>
  )
}
export default Layout
