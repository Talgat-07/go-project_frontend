import { useLocation } from 'react-router-dom'

export const RequestForm = () => {
  let navigation = useLocation()

  if (navigation.pathname === '/') return //HomeForm

  return //PagesForm
}
