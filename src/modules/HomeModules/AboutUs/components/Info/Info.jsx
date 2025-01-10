import { Typography } from '@/ui/Typography/Typography'
import styles from './Info.module.scss'

export const Info = ({ info }) => {
  return (
    <section className={styles.aboutUsSection} key={info.id}>
      <Typography variant='h2' className={styles.title}>
        {info.title}
      </Typography>
      <div className={styles.container}>
        <div className={styles.infoImg}>
          <img src={info.image} alt='info image' />
        </div>
        <Typography variant='h2' className={styles.description}>
          {info.description}
        </Typography>
      </div>
    </section>
  )
}
