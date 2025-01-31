import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Typography } from '@/ui'
import { SwitchButton } from '@/ui'
import { PartnersApi } from '../../api/PartnersApi'
import styles from './Partners.module.scss'
import { Heading } from '@/ui'
import { ContactsStorage } from '@/app/Storage/Storage'

export const Partners = () => {
  const { partnersData, partnersRequest } = PartnersApi()
  const { smData, smRequest } = ContactsStorage()

  useEffect(() => {
    smRequest()
  }, [smRequest])

  useEffect(() => {
    partnersRequest()
  }, [partnersRequest])

  const swiperSettings = {
    slidesPerView: 6,
    spaceBetween: 88,
    loop: true,
    speed: 4000,
    autoplay: {
      delay: 100,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    navigation: false,
    grabCursor: true,
  }

  const whatsappLink = smData[0]?.partners_whatsapp

  if (!partnersData.length) {
    return null
  }

  return (
    <section className={styles.partnersSection}>
      <div className={styles.bgElem} />
      <Heading text='Наши партнеры' />
      <Typography
        variant='h4'
        weight='fw5'
        className={styles.enticementDescription}
      >
        Хотите стать частью команды наших партнеров?
        <br />
        Напишите нам и мы обсудим возможности сотрудничества!
      </Typography>
      <div className={styles.sliderContainer}>
        <Swiper {...swiperSettings} className={styles.swiper}>
          {partnersData.map((item) => (
            <SwiperSlide key={item.id} className={styles.cards}>
              <a href={item.link} target='_blank' rel='noopener noreferrer'>
                <img
                  src={item.logo}
                  alt='partner logo'
                  className={styles.logo}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <a href={whatsappLink} target='_blank' rel='noopener noreferrer'>
        <SwitchButton maxWidth='250px'>Написать на WhatsApp</SwitchButton>
      </a>
    </section>
  )
}
