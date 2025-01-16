import { FaCircleArrowLeft } from 'react-icons/fa6'
import './RightArrow.scss'

export const RightArrow = (props) => {
  const { onClick } = props

  return (
    <section>
      {/* <img src='' alt='' /> */}
      <FaCircleArrowLeft
        onClick={onClick}
        style={{ color: '#454545' }}
        size={45}
        className='right'
      />
    </section>
  )
}
