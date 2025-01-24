import { Banner } from '@/modules/HomeModules/Banner/Banner'
import { AboutUs } from '@/modules/HomeModules/AboutUs/AboutUs'
import { VisaSupport } from '@/modules/HomeModules/VisaSupport/VisaSupport'
import { Delivery } from '@/modules/HomeModules/EASY_GO_delivery/Delivery'
import { Partners } from '@/modules/HomeModules/Partners/Partners'
// import { ToursSlider } from '@/modules/HomeModules/ToursSlider/ToursSlider'
import { Reviews } from '@/modules/HomeModules/Reviews/Reviews'
import styles from './home.module.scss'

export const Home = () => {
  return (
    <main className={styles.main}>
      <>
        <div className={styles.yellowCircle}>&nbsp;</div>
        <div className={styles.orangeCircle}>&nbsp;</div>
      </>
      <Banner />
      {/* <ToursSlider /> */}
      <AboutUs />
      <VisaSupport />
      <Delivery />
      <Reviews />
      {/* <hr /> */}
      <Partners />
    </main>
  )
}
export default Home
