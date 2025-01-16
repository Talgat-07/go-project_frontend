import { Outlet } from 'react-router-dom'
import { Copyright } from '@/modules/Copyright/Copyright'
import { ScrollButton } from '@/ui/ScrollButton/ScrollButton'

export const Layout = () => {
  return (
    <>
      <section>
        <Outlet />
        <ScrollButton />
      </section>
      <Copyright />
    </>
  )
}
export default Layout
