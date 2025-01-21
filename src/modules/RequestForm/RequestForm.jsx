import { useLocation } from 'react-router-dom'
import { HomeForm } from './components/HomeForm/HomeForm'

export const RequestForm = () => {
  let navigation = useLocation()

  if (navigation.pathname === '/') return <HomeForm />

  return //PagesForm
}
