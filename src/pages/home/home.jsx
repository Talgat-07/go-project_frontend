import { Banner } from '@/modules/HomeModules/Banner/Banner'
import styles from './Home.module.scss'
import { AboutUs } from '@/modules/HomeModules/AboutUs/AboutUs'
import { Facts } from '@/modules/HomeModules/Facts/Facts'
import { VisaSupport } from '@/modules/HomeModules/VisaSupport/VisaSupport'
import { Delivery } from '@/modules/HomeModules/EASY_GO_delivery/Delivery'
import { Partners } from '@/modules/HomeModules/Partners/Partners'
import { ToursSlider } from '@/modules/HomeModules/ToursSlider/ToursSlider'
import { HomeHeader } from '@/modules/Header/components/HomeHeader/HomeHeader'
import { Footer } from '@/modules/Footer/Footer'

export const Home = () => {
  return (
    <main>
      <HomeHeader />
      <Banner />
      <ToursSlider />
      <section className={styles.homePage}>
        <AboutUs />
        <Facts />
        <VisaSupport />
        <Delivery />
        <Partners />
      </section>
      <Footer />
    </main>
  )
}
export default Home
