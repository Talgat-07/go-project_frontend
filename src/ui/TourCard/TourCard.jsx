import { SwitchButton } from '../SwitchButton/SwitchButton'
import { Typography } from '../Typography/Typography'
import styles from './TourCard.module.scss'

export const TourCard = ({ item }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${item.image})` }}>
      <div className={styles.cardContent}>
        <Typography variant='fs24' weight='fw7'>
          {item.title}
        </Typography>
        <div className={styles.date}>
          <Typography weight='fw5'>
            {item.place}
          </Typography>
          <Typography weight='fw5'>
            {item.date}
          </Typography>
        </div>
        <div className={styles.price}>
          <Typography weight='fw7'>
            {item.price}
          </Typography>
          <SwitchButton maxWidth='165px'>
            Подробнее
          </SwitchButton>
        </div>
      </div>
    </div>
  )
}
