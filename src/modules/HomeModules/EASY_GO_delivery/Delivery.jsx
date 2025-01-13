import { Typography } from '@/ui/Typography/Typography'
import styles from './Delivery.module.scss'
import { useEG_Delicery } from './api/HomePageDeliveryApi'
import { useEffect } from 'react'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'

export const Delivery = () => {
  const { deliveryData, deliveryRequest } = useEG_Delicery()

  useEffect(() => {
    deliveryRequest()
  }, [deliveryRequest])

  return (
    <section className={styles.deliverySection}>
      <Typography variant='h2' className={styles.title}>
        Доставка Easy Go
      </Typography>
      {deliveryData.map((item) => (
        <div className={styles.deliveryBanner} key={item.id}>
          <img src={item.image} alt='background image' />
          <div className={styles.frame}>
            <Typography variant='h3' className={styles.frameTitle}>
              {item.title}
            </Typography>
            <Typography variant='p' className={styles.frameDescription}>
              {item.description}
            </Typography>
            <SwitchButton
              maxWidth='195px'
              padding='14px 45px'
              variant='animation_1'
            >
              Подробнее
            </SwitchButton>
          </div>
        </div>
      ))}
    </section>
  )
}
