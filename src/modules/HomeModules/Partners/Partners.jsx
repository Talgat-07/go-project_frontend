import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Typography } from '@/ui/Typography/Typography'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'
import { PartnersApi } from './api/PartnersApi'
import styles from './Partners.module.scss'

export const Partners = () => {
  const { partnersData, partnersRequest } = PartnersApi()

  useEffect(() => {
    partnersRequest()
  }, [partnersRequest])

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <section className={styles.partnersSection}>
      <Typography variant='h1' weight='fw5' className={styles.title}>
        Наши партнеры
      </Typography>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {partnersData.map((item) => (
            <div key={item.id}>
              <Link to={item.link}>
                <img
                  src={item.logo}
                  alt='partner logo'
                  className={styles.logo}
                />
              </Link>
            </div>
          ))}
        </Slider>
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