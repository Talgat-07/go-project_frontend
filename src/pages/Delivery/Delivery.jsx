import styles from './Delivery.module.scss'
import DeliveryModule from '@/modules/DeliveryModules/DeliveryModule'

export const Delivery = () => {
  return (
    <main className={styles.deliveryPage}>
      <DeliveryModule />
    </main>
  )
}
