import { Typography } from '@/ui/Typography/Typography';
import styles from './Info.module.scss';
import { Heading } from '@/ui/Heading/Heading';
import { MultiContainer } from '@/ui/Multicontainer/Multicontainer';

export const Info = ({ info }) => {
  return (
    <MultiContainer>
      <div className={styles.main}>
        <Heading text={info.title} />
        <div className={styles.content}>
          <div className={styles.img}>
            <img src={info.image} alt='info image' />
          </div>
          <Typography variant='fs24' className={styles.description}>
            {info.description}
          </Typography>
        </div>
      </div>
    </MultiContainer>
  );
};
