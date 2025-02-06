import { Typography } from '@/ui'
import { SwitchButton } from '@/ui'
import styles from './VisaCard.module.scss'
import { SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const VisaCard = ({ item }) => {
  const { t } = useTranslation()

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
          <Link to={`/visa-page/${item.id}`} target='_top'>
            <SwitchButton maxWidth='auto'>
              {t("buttons.more")}
            </SwitchButton>
          </Link>
        </div>
      </article>
    </SwiperSlide>
  )
}
