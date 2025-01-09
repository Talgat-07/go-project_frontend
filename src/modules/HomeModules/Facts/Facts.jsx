import { Typography } from '@/ui/Typography/Typography'
import styles from './Facts.module.scss'

export const Facts = () => {
  return (
    <section className={styles.factsSection}>
      <Typography variant='h2' className={styles.title}>
        Go project факты о нас
      </Typography>
      <div className={styles.container}>
        <div className={styles.frame}>
          <Typography variant='p' className={styles.frameCount}>
            3000+
          </Typography>
          <Typography variant='p' className={styles.frameDescription}>
            Довольных клиентов
          </Typography>
        </div>
        <div className={styles.frame}>
          <Typography variant='p' className={styles.frameCount}>
            50м
          </Typography>
          <Typography variant='p' className={styles.frameDescription}>
            Оборот клиентов
          </Typography>
        </div>
        <div className={styles.frame}>
          <Typography variant='p' className={styles.frameCount}>
            30,000+
          </Typography>
          <Typography variant='p' className={styles.frameDescription}>
            Подписчиков в инстаграм
          </Typography>
        </div>
      </div>
    </section>
  )
}
