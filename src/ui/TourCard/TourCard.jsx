import { Link } from 'react-router-dom'
import { SwitchButton, Typography } from '@/ui'
import { tourCardColors } from '@/utils/constants/constants.js'
import { FireIcon } from '@/app/assets/icons/FireIcon'
import { SaleIcon } from '@/app/assets/icons/SaleIcon'
import { ThumbIcon } from '@/app/assets/icons/ThumbIcon'
import styles from './TourCard.module.scss'
import { useTranslation } from 'react-i18next'

export const TourCard = ({ item }) => {
  const { t } = useTranslation()

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${item.image})` }}
    >
      {item.new && (
        <div className={`${styles.tagNew} ${styles.flex}`}>
          <Typography weight='fw6' color='white'>NEW</Typography>
        </div>
      )}
      <div className={`${styles.price} ${styles.flex}`}>
        <Typography
          variant='fs14'
          weight='fw7'
          color='red'
        >
          {item?.mini_info_frames[0]?.price}
        </Typography>
      </div>
      {item.icons === 'fire' && (
        <div className={`${styles.tagFire} ${styles.flex}`}>
          <FireIcon />
          <Typography variant='fs22' weight='fw6' color='white'>СКИДКА {item.discount}%</Typography>
        </div>
      )}
      {item.icons === 'thumb_up' && (
        <div className={`${styles.tagThumb} ${styles.flex}`}>
          <ThumbIcon />
          <Typography variant='fs20' weight='fw6' color='white'>ПОПУЛЯРНОЕ</Typography>
        </div>
      )}
      {item.icons === 'tag' && (
        <div className={styles.tagSale}>
          <SaleIcon />
        </div>
      )}
      <div
        className={styles.cardContent}
        style={{ background: tourCardColors[item.background_color] }}
      >
        <Typography className={styles.title} variant='fs24' weight='fw6'>
          {item.title}
        </Typography>
        <Typography weight='fw5'>
          {item.day_count} дней
        </Typography>
        <Typography variant='fs14' weight='fw4'>
          с {item.start_date} по {item.end_date}
        </Typography>
        <Link to={`/tours/${item.slug}`} className={styles.btnLink} target='_top'>
          <SwitchButton maxWidth='165px' className={styles.btn}>
            {t('buttons.more')}
          </SwitchButton>
        </Link>
      </div>
    </div>
  )
}
