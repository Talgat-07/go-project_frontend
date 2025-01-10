import { Typography } from '@/ui/Typography/Typography'
import styles from './VisaSupport.module.scss'
import { useEffect } from 'react'
import { useVisaSupport } from './api/VisaSupportApi'

export const VisaSupport = () => {
  const { visaData, visaRequest } = useVisaSupport()

  useEffect(() => {
    visaRequest()
  }, [visaRequest])

  return (
    <section className={styles.visaSupSection}>
      {visaData.map((item) => (
        <div className={styles.visaContentContainer}>
          <div className={styles.countryIcon}>
            <img src={item.icon} alt='country image' />
          </div>
          <div className={styles.infoFrame}>
            <Typography variant='h2' className={styles.title}>
              {item.description}
            </Typography>
          </div>
        </div>
      ))}
    </section>
  )
}
