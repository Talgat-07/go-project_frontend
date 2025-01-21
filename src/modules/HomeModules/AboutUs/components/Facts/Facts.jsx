import { Typography } from '@/ui/Typography/Typography'
import styles from './Facts.module.scss'
import { Heading } from '@/ui/Heading/Heading';
import { MultiContainer } from '@/ui/Multicontainer/Multicontainer';

export const Facts = ({ facts }) => {
  return (
    <MultiContainer>
      <section className={styles.factsSection}>
      <Heading text="Go project факты о нас"/>
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
    </MultiContainer>
  )
}
