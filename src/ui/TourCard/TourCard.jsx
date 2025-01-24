import { SwitchButton } from '../SwitchButton/SwitchButton'
import { Typography } from '../Typography/Typography'
import { tourCardColors } from '@/utils/constants/constants.js'
import styles from './TourCard.module.scss'

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
        <Typography variant='fs24' weight='fw7' useParser>
          {item.description}
        </Typography>
        {/* <Typography weight='fw5' className={styles.date}>
          {item?.mini_info_frames.tour_date}
        </Typography> */}
        <div className={styles.price}>
          {/* <Typography weight='fw7'>
            {item?.mini_info_frames.price}
          </Typography> */}
          <SwitchButton maxWidth='165px'>
            Подробнее
          </SwitchButton>
        </div>
      </div>
    </div>
  )
}
