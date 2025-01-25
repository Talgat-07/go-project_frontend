import { DeliveryAirplane } from '@/app/assets/icons/DeliveryAirplane'
import { DeliveryCar } from '@/app/assets/icons/DeliveryCar'
import { Typography } from '@/ui/Typography/Typography'
import styles from './TextList.module.scss'

export const TextList = ({ data }) => {
  return (
    <div className={styles.textList}>
      <div className={styles.smallCard}>
        <Typography variant='fs24' color={'#454545'} className={styles.desc}>
          {data[0]?.subtitle}
        </Typography>
      </div>
      <div className={styles.smallCard}>
        <div className={styles.subtitle}>
          <DeliveryAirplane className={styles.icon} />
          <Typography variant='fs24' color={'#000000'} className={styles.desc}>
            Авиаперевозки
          </Typography>
        </div>
        <Typography variant='fs24' color={'#454545'} className={styles.desc}>
          {data[0]?.air_delivery}
        </Typography>
      </div>
      <div className={styles.smallCard}>
        <div className={styles.subtitle}>
          <DeliveryCar className={styles.icon} />
          <Typography variant='fs24' color={'#000000'} className={styles.desc}>
            Грузоперевозки
          </Typography>
        </div>
        <Typography variant='fs24' color={'#454545'} className={styles.desc}>
          {data[0]?.cargo_delivery}
        </Typography>
      </div>
    </div>
  )
}
