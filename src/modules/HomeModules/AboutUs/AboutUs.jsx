import styles from './AboutUs.module.scss'
import { AboutUsAPI } from './api/AboutUsApi'
import { useEffect } from 'react'
import { Info } from './components/Info/Info'
import { Facts } from './components/Facts/Facts'

export const AboutUs = () => {
  const { aboutUsData, fetchRequest } = AboutUsAPI()

  useEffect(() => {
    fetchRequest()
  }, [fetchRequest])

  return (
    <>
      {aboutUsData.map((detail) => (
        <section className={styles.aboutUsSection}>
          <Info info={detail} />
          <Facts facts={detail.facts} />
        </section>
      ))}
    </>
  )
}
