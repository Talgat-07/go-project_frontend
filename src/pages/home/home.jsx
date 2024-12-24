import { Banner } from '@/modules/HomeModules/Banner/Banner'
import styles from './Home.module.scss'

export const Home = () => {
  return (
    <main>
      <Banner />
      <section className={styles.homePage}></section>
    </main>
  )
}
export default Home
