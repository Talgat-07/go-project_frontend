import { Typography } from '@/ui/Typography/Typography'
import styles from './AboutUs.module.scss'
import { AboutUsAPI } from './api/AboutUsApi'
import { useEffect } from 'react'

export const AboutUs = () => {
  const { aboutUsData, fetchRequest } = AboutUsAPI()

  useEffect(() => {
    fetchRequest()
  }, [fetchRequest])

  return (
    <>
      {aboutUsData.map((item) => (
        <section className={styles.aboutUsSection} key={item.id}>
          <Typography variant='h2' className={styles.title}>
            {item.title}
          </Typography>
          <div className={styles.container}>
            <div className={styles.infoImg}>
              <img src={item.image} alt='info image' />
            </div>
            <Typography variant='h2' className={styles.description}>
              {item.description}
            </Typography>
          </div>
        </section>
      ))}
    </>
  )
}
