import { Typography } from '@/ui';
import styles from './ServerError.module.scss';
import { BackArrow } from '@/app/assets/icons/BackArrow';
import { Link } from 'react-router-dom';
import { PATH } from '@/utils/constants/constants';

export const ServerError = () => {
  return (
    <section className={styles.notFoundSection}>
      <Typography variant='h1' className={styles.errorCode} color="#fff">
      OOPS
      </Typography>
      <Typography variant='h2' className={styles.errorMessage} color="#fff">
      У нас временные технические неполадки.
      </Typography>
      <Link to={PATH.home}>
        <BackArrow />
        <Typography variant='fs24' weight='fw5' color="#fff">
          На главную
        </Typography>
      </Link>
    </section>
  );
};
