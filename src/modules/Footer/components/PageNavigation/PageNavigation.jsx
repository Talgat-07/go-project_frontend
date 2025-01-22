import { Link } from 'react-router-dom';
import styles from './PageNavigation.module.scss';
import { Typography } from '@/ui/Typography/Typography';
import { PATH } from '@/utils/constants/constants';

export const PageNavigation = () => {
  return (
    <div className={styles.links}>
      <Link to={PATH.tours}>
        <Typography>Туры</Typography>
          </Link>
      <Link to={PATH.visa}>
      <Typography>Визы</Typography>
      </Link>
      <Link to={PATH.delivery}>
      <Typography>Доставка</Typography>
      </Link>
    </div>
  );
};
