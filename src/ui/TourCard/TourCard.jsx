import { Link } from 'react-router-dom'
import { SwitchButton } from '../SwitchButton/SwitchButton'
import { Typography } from '../Typography/Typography'
import { tourCardColors } from '@/utils/constants/constants.js'
import { FireIcon } from '@/app/assets/icons/FireIcon'
import { SaleIcon } from '@/app/assets/icons/SaleIcon'
import { ThumbIcon } from '@/app/assets/icons/ThumbIcon'
import styles from './TourCard.module.scss'

export const TourCard = ({ item }) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${item.image})` }}
    >
      {item.new && (
        <div className={`${styles.tagNew} ${styles.flex}`}>
          <Typography weight='fw7' color='white'>NEW</Typography>
        </div>
      )}
      {item.discount !== 0 && (
        <div className={`${styles.tagDiscount} ${styles.flex}`}>
          <Typography variant='fs14' weight='fw7' color='red'>-{item.discount}%</Typography>
        </div>
      )}
      {item.icons === 'fire' && (
        <div className={`${styles.tagFire} ${styles.flex}`}>
          <FireIcon />
          <Typography variant='fs22' weight='fw6' color='white'>О! СКИДКА</Typography>
        </div>
      )}
      {item.icons === 'thumb_up' && (
        <div className={`${styles.tagThumb} ${styles.flex}`}>
          <ThumbIcon />
          <Typography variant='fs20' weight='fw4' color='white'>ЛУЧШАЯ СКИДКА</Typography>
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
        <Typography className={styles.title} variant='fs24' weight='fw7'>
          {item.description}
        </Typography>
        <Typography weight='fw5' className={styles.date}>
          {item?.mini_info_frames[0]?.tour_date}
        </Typography>
        <div className={styles.price}>
          <Typography weight='fw7'>
            {item?.mini_info_frames[0]?.price}
          </Typography>
          <Link to={`/tours/${item.id}`} className={styles.btnLink}>
            <SwitchButton maxWidth='165px' className={styles.btn}>
              Подробнее
            </SwitchButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
