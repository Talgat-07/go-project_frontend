import { Banner } from '@/modules/HomeModules/Banner/Banner'
import styles from './Home.module.scss'
import { AboutUs } from '@/modules/HomeModules/AboutUs/AboutUs'
import { Facts } from '@/modules/HomeModules/Facts/Facts'
import { VisaSupport } from '@/modules/HomeModules/VisaSupport/VisaSupport'
import { Delivery } from '@/modules/HomeModules/EASY_GO_delivery/Delivery'
import { Partners } from '@/modules/HomeModules/Partners/Partners'

export const Home = () => {
  return (
    <main>
      <Banner />
      <section className={styles.homePage}>
        <AboutUs />
        <Facts />
        <VisaSupport />
        <Delivery />
        <Partners />
      </section>
    </main>
  )
}
export default Home
