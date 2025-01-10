import { Typography } from '@/ui/Typography/Typography'
import styles from './Facts.module.scss'

export const Facts = ({ facts }) => {
  return (
    <section className={styles.factsSection}>
      <Typography variant='h2' className={styles.title}>
        Go project факты о нас
      </Typography>
      <div className={styles.divideLine}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>

      <div className={styles.frameSection}>
        <>
          {facts.map((item) => (
            <div className={styles.frame} key={item.id}>
              <Typography variant='h3' className={styles.frameTitle}>
                {item.value}
              </Typography>
              <Typography variant='p' className={styles.frameDescription}>
                {item.name}
              </Typography>
            </div>
          ))}
        </>
      </div>
    </section>
  )
}
