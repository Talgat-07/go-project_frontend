import { Typography } from '@/ui';
import styles from './Content.module.scss';
import { SwitchButton } from '@/ui';
import { MultiContainer } from '@/ui';

export const Content = ({ slide }) => {
  return (
    <section className={styles.banner}>
      <div className={styles.img}>
        <img src={slide.image} alt='background banner' />
        <div className={styles.overlay} />
      </div>
      <MultiContainer className={styles.frame}>
        <Typography className={styles.title} variant='h1' weight='fw6'>
        {slide.description}
        </Typography>
        <Typography className={styles.description} truncate={100}>
          {slide.description}
        </Typography>
        <SwitchButton maxWidth='195px' padding='14px 45px'>
          Подробнее
        </SwitchButton>
      </MultiContainer>
    </section>
  );
};