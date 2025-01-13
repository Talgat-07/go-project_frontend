import { Outlet } from 'react-router-dom'
import { Copyright } from '@/modules/Copyright/Copyright'

export const Layout = () => {
  return (
    <>
      <section>
        <Outlet />
      </section>
      <Copyright />
    </>
  )
}
export default Layout
