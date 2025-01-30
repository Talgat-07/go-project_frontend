import { Banner } from '@/modules/HomeModules'
import { AboutUs } from '@/modules/HomeModules'
import { Delivery } from '@/modules/HomeModules'
import { Partners } from '@/modules/HomeModules'
import { ToursSlider } from '@/modules/HomeModules'
import { Reviews } from '@/modules/HomeModules'
import styles from './HomePage.module.scss'
import { VisaSupport } from '@/modules/VisaSupModules/VisaSupport/VisaSupport'

export const HomePage = () => {
  return (
    <main className={styles.main}>
      <>
        <div className={styles.yellowCircle}>&nbsp;</div>
        <div className={styles.orangeCircle}>&nbsp;</div>
      </>
      <Banner />
      <ToursSlider />
      <AboutUs />
      <VisaSupport />
      <Delivery />
      <Reviews />
      {/* <hr /> */}
      <Partners />
    </main>
  )
}
