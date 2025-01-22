import { Typography } from '@/ui/Typography/Typography'
import styles from './Banner.module.scss'
import { BannerApi } from './api/BannerApi'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { MultiContainer } from '@/ui/Multicontainer/Multicontainer'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'

export const Banner = () => {
  const { bannerData, bannerRequest } = BannerApi()

  useEffect(() => {
    bannerRequest()
  }, [bannerRequest])

  return (
    <Swiper>
      {bannerData.map((item, index) => (
        <SwiperSlide key={index}>
          <section className={styles.banner} key={item.id}>
            <img src={item.photo} alt='background banner' />
            <MultiContainer>
              <div className={styles.frame}>
                <Typography className={styles.title} variant='h1'>
                  {item.title}
                </Typography>
                <Typography className={styles.description} variant='p'>
                  {item.text}
                </Typography>
                <SwitchButton maxWidth='195px' padding='14px 45px'>
                  Подробнее
                </SwitchButton>
              </div>
            </MultiContainer>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
