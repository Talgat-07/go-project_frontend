import { Banner } from '@/modules/HomeModules/Banner/Banner'
import styles from './Home.module.scss'
import { ToursSlider } from '@/modules/HomeModules/ToursSlider/ToursSlider'
import 'slick-carousel/slick/slick.css'

export const Home = () => {
  return (
    <main>
      <Banner />
      <section className={styles.homePage}>
        <ToursSlider />
      </section>
    </main>
  )
}
export default Home
