import { useParams } from 'react-router-dom'

export const TourDetail = () => {
  const { id } = useParams()
  return (
    <main>тур id {id}</main>
  )
}
