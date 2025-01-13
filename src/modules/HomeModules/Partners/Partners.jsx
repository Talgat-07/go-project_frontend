import { Typography } from '@/ui/Typography/Typography'
import styles from './Partners.module.scss'
import { FaGooglePay } from 'react-icons/fa'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'

export const Partners = () => {
  return (
    <section className={styles.partnersSection}>
      <Typography variant='h2' className={styles.title}>
        Наши партнеры
      </Typography>
      <div>
        <div className={styles.logos}>
          <FaGooglePay style={{ color: '#9A00AB' }} size={'85px'} />
          <FaGooglePay style={{ color: '#9A00AB' }} size={'85px'} />
          <FaGooglePay style={{ color: '#9A00AB' }} size={'85px'} />
          <FaGooglePay style={{ color: '#9A00AB' }} size={'85px'} />
          <FaGooglePay style={{ color: '#9A00AB' }} size={'85px'} />
          <FaGooglePay style={{ color: '#9A00AB' }} size={'85px'} />
        </div>
        <Typography variant='p' className={styles.enticementDescription}>
          Хотите стать частью команды наших партнеров? Напишите нам и мы обсудим
          возможности сотрудничества!{' '}
        </Typography>
        <SwitchButton maxWidth='286px' padding='9px 14px' variant='animation_2'>
          Написать на WhatsApp
        </SwitchButton>
      </div>
    </section>
  )
}
