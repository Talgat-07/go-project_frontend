import { Typography } from '@/ui/Typography/Typography'
import styles from './Banner.module.scss'
import banner from '@/app/assets/images/static_banner.jpg'

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <img src={banner} alt='background banner' />
      <div className={styles.frame}>
        <Typography className={styles.title} variant='h1'>
          Премиум шоппинг тур в Китай
        </Typography>
        <Typography className={styles.description} variant='p'>
          С Арзубеком Вонама, для предпринимателей по четырём годам.
        </Typography>
        <button className={styles.switchBtn}>Подробнее</button>
      </div>
    </section>
  )
}
