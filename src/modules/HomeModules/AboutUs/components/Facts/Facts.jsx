import { Typography } from '@/ui/Typography/Typography';
import styles from './Facts.module.scss';
import { Heading } from '@/ui/Heading/Heading';
import { MultiContainer } from '@/ui/Multicontainer/Multicontainer';

export const Facts = ({ facts }) => {
  return (
    <MultiContainer>
      <Heading text="Go project факты о нас" />
      <section className={styles.factsSection}>
        <article className={styles.divideLine}>
          <div className={styles.line}>&nbsp;</div>
          <div className={styles.line}>&nbsp;</div>
          <div className={styles.line}>&nbsp;</div>
        </article>
        <div className={styles.frameSection}>
            {facts.map((item) => (
              <div className={styles.frame} key={item.id}>
                <Typography variant='h1' weight="fw4" className={styles.title}>
                  {item.value}
                </Typography>
                <Typography variant='fs24' color="#FF6600">
                  {item.name}
                </Typography>
              </div>
            ))}
        </div>
      </section>
    </MultiContainer>
  );
};
