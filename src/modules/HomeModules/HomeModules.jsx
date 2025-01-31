import { Banner } from '@/modules/HomeModules/components'
import { AboutUs } from '@/modules/HomeModules/components'
import { Delivery } from '@/modules/HomeModules/components'
import { Partners } from '@/modules/HomeModules/components'
import { ToursSlider } from '@/modules/HomeModules/components'
import { Reviews } from '@/modules/HomeModules/components'
import styles from './HomeModules.module.scss'
import { VisaSupport } from '@/modules/VisaSupModules/VisaSupport/VisaSupport'

export const HomeModules = () => {
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
      <Partners />
    </main>
  )
}
