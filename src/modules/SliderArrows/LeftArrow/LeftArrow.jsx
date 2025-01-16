import { FaCircleArrowRight } from 'react-icons/fa6'
import './LeftArrow.scss'

export const LeftArrow = (props) => {
  const { onClick } = props

  return (
    <section>
      {/* <img src='' alt='' /> */}
      <FaCircleArrowRight
        onClick={onClick}
        style={{ color: '#454545' }}
        size={45}
        className='left'
      />
    </section>
  )
}
