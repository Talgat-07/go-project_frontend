import styles from './Tours.module.scss'
import { ToursFrames } from '@/modules/ToursModules/Tours/ToursFrames'
import { ToursFilter } from '@/modules/ToursModules/ToursFilter/ToursFIlter'

export const Tours = () => {
  return (
    <main className={styles.toursPage}>
      <ToursFilter />
      <ToursFrames />
    </main>
  )
}

export default Tours
