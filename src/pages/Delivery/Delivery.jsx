import { DeliveryModule } from '@/modules/DeliveryModules/DeliveryModule'
import styles from './Delivery.module.scss'

export const Delivery = () => {
  return (
    <main className={styles.deliveryPage}>
      <DeliveryModule />
    </main>
  )
}
