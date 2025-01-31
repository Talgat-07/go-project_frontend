import { Typography } from '@/ui'
import { SwitchButton } from '@/ui'
import styles from './VisaCard.module.scss'
import { SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

export const VisaCard = ({ item }) => {
  return (
    <SwiperSlide className={styles.block}>
      <div className={styles.bgImg}>
        <img src={item.icon} alt={item.title} />
      </div>
      <article className={styles.content}>
        <div className={styles.contentPosition}>
          <Typography variant='fs20' weight='fw6' className={styles.title}>
            {item.title}
          </Typography>
          <Typography className={styles.description}>
            {item.description}
          </Typography>
          <SwitchButton maxWidth='auto'>
            <Link to={`/visa-support/${item.id}`} target='_top'>
              Подробнее
            </Link>
          </SwitchButton>
        </div>
      </article>
    </SwiperSlide>
  )
}
