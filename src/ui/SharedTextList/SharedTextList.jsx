import { DeliveryAirplane } from '@/app/assets/icons/DeliveryAirplane'
import { DeliveryCar } from '@/app/assets/icons/DeliveryCar'
import { Typography } from '@/ui/Typography/Typography'
import styles from './SharedTextList.module.scss'

export const SharedTextList = ({
  subtitle,
  airDelivery,
  cargoDelivery,
  deliveryTours,
  individualIntro,
}) => (
  <div className={styles.textList}>
    {deliveryTours ? (
      [
        { text: subtitle },
        {
          icon: <DeliveryAirplane className={styles.icon} />,
          label: 'Авиаперевозки',
          text: airDelivery,
        },
        {
          icon: <DeliveryCar className={styles.icon} />,
          label: 'Грузоперевозки',
          text: cargoDelivery,
        },
      ].map((item, index) => (
        <div key={index} className={styles.smallCard}>
          {item.icon && (
            <div className={styles.subtitle}>
              {item.icon}
              <Typography
                variant='fs24'
                color='#000000'
                className={styles.desc}
              >
                {item.label}
              </Typography>
            </div>
          )}
          <Typography variant='fs24' color='#454545' className={styles.desc}>
            {item.text}
          </Typography>
        </div>
      ))
    ) : (
      <Typography useParser variant='fs24' color='#000000'>
        {individualIntro}
      </Typography>
    )}
  </div>
)
