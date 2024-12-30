import { Typography } from '@/ui/Typography/Typography'
import styles from './Partners.module.scss'
import img from '@/app/assets/images/temporarily_img.jpeg'
import { FaGooglePay } from 'react-icons/fa'

export const Partners = () => {
  return (
    <section className={styles.partnersSection}>
      <Typography variant='h2' className={styles.title}>
        Наши партнеры
      </Typography>
      <div>
        <div className={styles.logos}>
          {/* <div className={styles.logo}>
            <img src={img} alt='partner logo' />
          </div> */}
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
        <button className={styles.switchBtn}>Написать на WhatsApp</button>
      </div>
    </section>
  )
}
