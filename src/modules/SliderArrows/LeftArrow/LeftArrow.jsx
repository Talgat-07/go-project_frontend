import { BsArrowRightSquareFill } from 'react-icons/bs'
import './LeftArrow.scss'

export const LeftArrow = (props) => {
  const { onClick } = props

  return (
    <section>
      {/* <img src='' alt='' /> */}
      <BsArrowRightSquareFill
        onClick={onClick}
        style={{ color: '#404040' }}
        size={45}
        className='left'
      />
    </section>
  )
}
