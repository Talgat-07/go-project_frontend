import { Link } from 'react-router-dom'
import { SwitchButton } from '../SwitchButton/SwitchButton'
import { Typography } from '../Typography/Typography'
import { tourCardColors } from '@/utils/constants/constants.js'
import styles from './TourCard.module.scss'
import parse from 'html-react-parser'

export const TourCard = ({ item }) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${item.image})` }}
    >
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
