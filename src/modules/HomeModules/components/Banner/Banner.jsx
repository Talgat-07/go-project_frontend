import styles from './Banner.module.scss'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination, Zoom } from 'swiper/modules'
import { Content } from './components/Content'
import { ToursSliderApi } from '../../api/ToursSliderApi'

export const Banner = () => {
  const { toursData, toursRequest } = ToursSliderApi()

  useEffect(() => {
    toursRequest()
  }, [toursRequest])

  return (
    <Swiper
      className={styles.slider}
      modules={[Pagination, Autoplay, Zoom]}
      pagination={{
        clickable: true,
      }}
      fadeEffect={{
        crossFade: true,
      }}
      loop={true}
      speed={1000}
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
