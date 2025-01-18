import { Outlet, useLocation } from 'react-router-dom'
import { Copyright } from '@/modules/Copyright/Copyright'
import { ScrollButton } from '@/ui/ScrollButton/ScrollButton'
import Header from '@/modules/Header/Header'
import { Footer } from '@/modules/Footer/Footer'
import { RequestForm } from '@/modules/RequestForm/RequestForm'
import { NotFound } from '@/pages/NotFound/NotFound'

export const Layout = () => {
  let path = useLocation()

  if (path.pathname === '/*') return <NotFound />

  return (
    <>
      <Header />
      <RequestForm />
      <Outlet />
      <ScrollButton />
      <Footer />
      <Copyright />
    </>
  )
}
export default Layout
