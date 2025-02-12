import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Typography } from '@/ui'
import { SwitchButton } from '@/ui'
import { PartnersApi } from '../../api/PartnersApi'
import styles from './Partners.module.scss'
import { Heading } from '@/ui'
import { ContactsStorage } from '@/app/Storage/Storage'
import { useTranslation } from 'react-i18next'

export const Partners = () => {
  const { t } = useTranslation()
  const { partnersData, partnersRequest } = PartnersApi()
  const { smData, smRequest } = ContactsStorage()

  useEffect(() => {
    smRequest()
  }, [smRequest])

  useEffect(() => {
    partnersRequest()
  }, [partnersRequest])

  const swiperSettings = {
    slidesPerView: partnersData.length < 6 ? partnersData.length : 6,
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
      <Heading text={t("headings.ourPartners")} />
      <Typography
        variant='h4'
        weight='fw5'
        className={styles.enticementDescription}
      >
        {t("partners.text1")}
        <br />
        {t("partners.text2")}
      </Typography>
      <div className={styles.sliderContainer}>
        <Swiper {...swiperSettings} className={styles.swiper}>
          {partnersData.map((item, index) => (
            <SwiperSlide key={index} className={styles.cards}>
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
        <SwitchButton maxWidth='250px'>{t("buttons.writeOnWA")}</SwitchButton>
      </a>
    </section>
  )
}
