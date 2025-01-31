import { IndividualToursModules } from '@/modules/IndividualToursModules/IndividualToursModules'
import styles from './IndividualToursPage.module.scss'

export const IndividualToursPage = () => {
  return (
    <main className={styles.IndividualTours}>
      <IndividualToursModules />
    </main>
  )
}
