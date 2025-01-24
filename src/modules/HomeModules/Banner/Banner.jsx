import styles from './Banner.module.scss'
import { BannerApi } from './api/BannerApi'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination, Zoom } from 'swiper/modules'
import { Content } from './ui/Content'

export const Banner = () => {
  const { bannerData, bannerRequest } = BannerApi()

  useEffect(() => {
    bannerRequest()
  }, [bannerRequest])

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
      {bannerData.map((item) => (
        <SwiperSlide key={item.id}>
          <Content slide={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}