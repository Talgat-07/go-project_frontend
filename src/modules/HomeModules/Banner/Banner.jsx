import { Typography } from '@/ui/Typography/Typography'
import styles from './Banner.module.scss'
import { BannerApi } from './api/BannerApi'
import { useEffect } from 'react'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'
import { MultiContainer } from '@/ui/Multicontainer/Multicontainer'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'
import { Content } from './ui/Content'

export const Banner = () => {
  const { bannerData, bannerRequest } = BannerApi()

  useEffect(() => {
    bannerRequest()
  }, [bannerRequest])

  return (
    <Swiper
      className={styles.slider}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        {bannerData.map((item) => (
          <Content item={item} />
        ))}
      </SwiperSlide>
    </Swiper>
  )
}
