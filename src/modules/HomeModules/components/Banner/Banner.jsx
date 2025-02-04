import styles from './Banner.module.scss'
import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination, Zoom } from 'swiper/modules'
import { Content } from './components/Content'
import { ToursSliderApi } from '../../api/ToursSliderApi'

export const Banner = () => {
  const { toursData, toursRequest } = ToursSliderApi()

  const swiperRef = useRef(null)

  const customStyles = `
    .custom-swiper .swiper-pagination-bullet {
      width: 25px;
      height: 25px;
      border-radius: 100%;
      background: #c3bebe;
      opacity: 0.72;
    }

    .custom-swiper .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background: #fff;
      opacity: 1;
    }
  `

  const styleSheet = document.createElement('style')
  styleSheet.type = 'text/css'
  styleSheet.innerText = customStyles
  document.head.appendChild(styleSheet)

  useEffect(() => {
    toursRequest()
  }, [toursRequest])

  return (
    <Swiper
      ref={swiperRef}
      className={`${styles.slider} custom-swiper`}
      modules={[Pagination, Autoplay, Zoom]}
      pagination={{
        clickable: true,
      }}
      fadeEffect={{
        crossFade: true,
      }}
      loop={true}
      speed={1150}
      easing={'ease-in-out'}
      autoplay={{
        delay: 13000,
        disableOnInteraction: false,
      }}
    >
      {toursData.map((item) => (
        <SwiperSlide key={item.id}>
          <Content slide={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
