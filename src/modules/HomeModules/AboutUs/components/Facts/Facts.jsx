import { Typography } from '@/ui/Typography/Typography'
import styles from './Facts.module.scss'

export const Facts = ({ facts }) => {
  return (
    <section className={styles.factsSection}>
      <Typography variant='h2' className={styles.title}>
        Go project факты о нас
      </Typography>
      <article className={styles.divideLine}>
        <div className={styles.line}>&nbsp;</div>
        <div className={styles.line}>&nbsp;</div>
        <div className={styles.line}>&nbsp;</div>
      </article>
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
