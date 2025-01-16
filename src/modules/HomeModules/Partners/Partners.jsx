import { Typography } from '@/ui/Typography/Typography'
import styles from './Partners.module.scss'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'
import { PartnersApi } from './api/PartnersApi'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Partners = () => {
  const { partnersData, partnersRequest } = PartnersApi()

  useEffect(() => {
    partnersRequest()
    console.log(partnersData)
  }, [partnersRequest])

  return (
    <section className={styles.partnersSection}>
      <Typography variant='h2' className={styles.title}>
        Наши партнеры
      </Typography>
      <div>
        <div className={styles.logos}>
          {partnersData.map((item) => (
            <div key={item.id}>
              <Link to={item.link}>
                <img
                  src={item.logo}
                  alt='partner logo'
                  className={styles.logo}
                />
              </Link>
            </div>
          ))}
        </div>
        <Typography variant='p' className={styles.enticementDescription}>
          Хотите стать частью команды наших партнеров? Напишите нам и мы обсудим
          возможности сотрудничества!
        </Typography>
        <SwitchButton maxWidth='286px' padding='9px 14px' variant='animation_2'>
          Написать на WhatsApp
        </SwitchButton>
      </div>
    </section>
  )
}
