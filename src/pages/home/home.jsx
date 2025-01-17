import { Banner } from '@/modules/HomeModules/Banner/Banner'
import styles from './Home.module.scss'
import { AboutUs } from '@/modules/HomeModules/AboutUs/AboutUs'
import { VisaSupport } from '@/modules/HomeModules/VisaSupport/VisaSupport'
import { Delivery } from '@/modules/HomeModules/EASY_GO_delivery/Delivery'
import { Partners } from '@/modules/HomeModules/Partners/Partners'
import { ToursSlider } from '@/modules/HomeModules/ToursSlider/ToursSlider'
import { Reviews } from '@/modules/HomeModules/Reviews/Reviews'

export const Home = () => {
  return (
    <main>
      <>
        <div className={styles.yellowCircle}>&nbsp;</div>
        <div className={styles.orangeCircle}>&nbsp;</div>
      </>
      <Banner />
      <ToursSlider />
      <section className={styles.homePage}>
        <AboutUs />
        <VisaSupport />
        <Delivery />
        <Reviews />
        <Partners />
      </section>
    </main>
  )
}
export default Home
