import styles from './Tours.module.scss'
import { AllTours } from '@/modules/ToursModules/Tours/AllTours.jsx'

export const Tours = () => {
  return (
    <main className={styles.toursPage}>
      <AllTours />
    </main>
  )
}

export default Tours
