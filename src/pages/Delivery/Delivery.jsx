import { Introduction } from '@/modules/DeliveryModules/Introduction/Introduction'
import styles from './Delivery.module.scss'
import { CostBlock } from '@/ui/ProcessAndCost/CostBlock'

export const Delivery = () => {
  return (
    <main className={styles.deliveryPage}>
      <Introduction />
      <CostBlock />
    </main>
  )
}
