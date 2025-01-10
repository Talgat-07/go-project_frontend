import { Outlet } from 'react-router-dom'
import { Footer } from '@/modules/Footer/Footer'

export const Layout = () => {
  return (
    <>
      <section>
        <Outlet />
      </section>
    </>
  )
}
export default Layout
