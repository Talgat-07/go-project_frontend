import { Typography } from '@/ui/Typography/Typography'
import styles from './Banner.module.scss'
import { BannerApi } from './api/BannerApi'
import { useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'

export const Banner = () => {
  const { bannerData, bannerRequest } = BannerApi()

  useEffect(() => {
    bannerRequest()
  }, [bannerRequest])

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 1900,
    pauseOnHover: true,
  }

  return (
    <Slider {...settings} className={styles.slider}>
      {bannerData.map((item) => (
        <section className={styles.banner} key={item.id}>
          <img src={item.image} alt='background banner' />
          <div className={styles.frame}>
            <Typography className={styles.title} variant='h1'>
              {item.title}
            </Typography>
            <Typography className={styles.description} variant='p'>
              {item.description}
            </Typography>
            <SwitchButton
              maxWidth='195px'
              padding='14px 45px'
              variant='animation_1'
            >
              Подробнее
            </SwitchButton>
          </div>
        </section>
      ))}
    </Slider>
  )
}
