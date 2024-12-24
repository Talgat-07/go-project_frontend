import styles from './Banner.module.scss'
import banner from '@/app/assets/images/static_banner.jpg'

export const Banner = () => {
  return (
    <article className={styles.banner}>
      <img src={banner} alt='background banner' />
    </article>
  )
}
