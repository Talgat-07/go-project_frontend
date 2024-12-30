import { Typography } from '@/ui/Typography/Typography'
import styles from './Delivery.module.scss'
import img from '@/app/assets/images/temporarily_img.jpeg'

export const Delivery = () => {
  return (
    <section className={styles.deliverySection}>
      <Typography variant='h2' className={styles.title}>
        Доставка Easy Go
      </Typography>
      <div className={styles.deliveryBanner}>
        <img src={img} alt='background image' />
        <div className={styles.frame}>
          <Typography variant='h3' className={styles.frameTitle}>
            Доставка
          </Typography>
          <Typography variant='p' className={styles.frameDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
            rerum!
          </Typography>
          <button className={styles.switchBtn}>Подробнее</button>
        </div>
      </div>
    </section>
  )
}
