import { PagesHeader } from '@/modules/Header/components/PagesHeader/PagesHeader'
import styles from './Tours.module.scss'
import { Footer } from '@/modules/Footer/Footer'
import { ToursFrames } from '@/modules/ToursModules/Tours/ToursFrames'
import { ToursFilter } from '@/modules/ToursModules/ToursFilter/ToursFilter'

export const Tours = () => {
  return (
    <>
      <PagesHeader />
      <main className={styles.toursPage}>
        <ToursFilter />
        <ToursFrames />
      </main>
      <Footer />
    </>
  )
}

export default Tours
