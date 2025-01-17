import { useLocation } from 'react-router-dom'
import { HomeHeader } from './components/HomeHeader/HomeHeader'
import { PagesHeader } from './components/PagesHeader/PagesHeader'

export const Header = () => {
  let location = useLocation()

  if (location.pathname === '/') return <HomeHeader />

  return <PagesHeader />
}
export default Header
