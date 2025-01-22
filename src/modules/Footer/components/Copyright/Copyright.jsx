import { Typography } from '@/ui/Typography/Typography';
import styles from './Copyright.module.scss';
import { GeeksLogo } from '@/app/assets/icons/GeeksLogo';
import { Link } from 'react-router-dom';
import { geeksLink } from '@/utils/constants/constants';

export const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <a
        href={geeksLink}
        target='_blank'
        className={styles.contentSection}
      >
        <Typography variant='h4' className={styles.title}>
          Made by GeeksPro
        </Typography>
        <div className={styles.logo}>
          <GeeksLogo />
        </div>
      </a>
    </div>
  );
};
