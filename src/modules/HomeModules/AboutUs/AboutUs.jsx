import styles from './AboutUs.module.scss'
import { AboutUsAPI } from './api/AboutUsApi'
import { useEffect } from 'react'
import { Info } from './components/Info/Info'
import { Facts } from './components/Facts/Facts'
import bg from '../../../app/assets/images/aboutUsBg.png'

export const AboutUs = () => {
  const { aboutUsData, fetchRequest } = AboutUsAPI()

  useEffect(() => {
    fetchRequest()
  }, [fetchRequest])

  return (
    <>
      {aboutUsData.map((detail) => (
        <section className={styles.aboutUsSection}>
          <div className={styles.bg}>
            <img src={bg} alt='background image' />
          </div>
          <Info info={detail} />
          <Facts facts={detail.facts} />
        </section>
      ))}
    </>
  )
}
