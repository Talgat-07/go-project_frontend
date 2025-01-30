import { Typography } from '@/ui';
import styles from './NotFound.module.scss';
import { BackArrow } from '@/app/assets/icons/BackArrow';
import { Link } from 'react-router-dom';
import { PATH } from '@/utils/constants/constants';

export const NotFound = () => {
  return (
    <section className={styles.notFoundSection}>
      <Typography variant='h1' className={styles.errorCode} color="#fff">
        404
      </Typography>
      <Typography variant='h2' className={styles.errorMessage} color="#fff">
        Ой! Кажется, мы не можем найти эту страницу.
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
