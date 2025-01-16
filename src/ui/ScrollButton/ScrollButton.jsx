import './ScrollButton.scss'
import { MdPlayArrow } from 'react-icons/md'

export const ScrollButton = () => {
  const handlerScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <article className='scrollBtn' onClick={handlerScroll}>
      <MdPlayArrow className='scrollIcon' size={45} />
    </article>
  )
}
