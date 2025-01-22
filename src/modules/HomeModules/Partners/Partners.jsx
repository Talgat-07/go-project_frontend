import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Typography } from '@/ui/Typography/Typography'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'
import { PartnersApi } from './api/PartnersApi'
import styles from './Partners.module.scss'

export const Partners = () => {
  const { partnersData, partnersRequest } = PartnersApi()

  useEffect(() => {
    partnersRequest()
  }, [partnersRequest])

  const swiperSettings = {
    slidesPerView: 3,
    spaceBetween: 88,
    loop: true,
    speed: 4000,
    autoplay: {
      delay: 100,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    navigation: false ,
    grabCursor: true,
  };

  return (
    <section className={styles.partnersSection}>
      <Typography variant='h1' weight='fw5' className={styles.title}>
        Наши партнеры
      </Typography>
      <div className={styles.sliderContainer}>
        <Swiper
          {...swiperSettings}
          className={styles.swiper}
        >
          {partnersData.map((item) => (
            <SwiperSlide key={item.id} className={styles.cards}>
              <Link to={item.link}>
                <img
                  src={item.logo}
                  alt='partner logo'
                  className={styles.logo}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Typography variant='h4' weight='fw5' className={styles.enticementDescription}>
        Хотите стать частью команды наших партнеров?<br />
        Напишите нам и мы обсудим возможности сотрудничества!
      </Typography>
      <SwitchButton maxWidth='250px'>
        Написать на WhatsApp
      </SwitchButton>
    </section>
  )
}