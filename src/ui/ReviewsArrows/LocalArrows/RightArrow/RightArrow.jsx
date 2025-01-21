import { BsArrowLeftSquareFill } from 'react-icons/bs'
import './RIghtArrow.scss'

export const RightArrow = (props) => {
  const { onClick } = props

  return (
    <section>
      {/* <img src='' alt='' /> */}
      <BsArrowLeftSquareFill
        onClick={onClick}
        style={{ color: '#404040' }}
        size={45}
        className='rightLocalArrow'
      />
    </section>
  )
}
