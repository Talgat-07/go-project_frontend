import { Typography } from '@/ui/Typography/Typography';
import styles from './Content.module.scss';
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton';
import { MultiContainer } from '@/ui/MultiContainer/MultiContainer';

export const Content = ({ slide }) => {
  return (
    <section className={styles.banner}>
      <div className={styles.img}>
        <img src={slide.image} alt='background banner' />
        <div className={styles.overlay} />
      </div>
      <MultiContainer className={styles.frame}>
        <Typography className={styles.title} variant='h1' weight='fw6' truncate={50}>
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