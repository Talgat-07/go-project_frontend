import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { PATH } from '@/utils/constants/constants';
import { Typography } from '@/ui/Typography/Typography';

export const Navigation = ({ color }) => {
  const navigationList = [
    { path: PATH.tours, label: "Туры" },
    { path: PATH.visa, label: "Визы" },
    { path: PATH.delivery, label: "Доставка товаров" },
    { path: "", label: "О нас" },
    { path: "", label: "Отзывы" },
  ];

  return (
    <div className={styles.navigation}>
      {navigationList.map((item, index) => (
        <Link to={item.path} key={index}>
          <Typography weight="fw6" className={styles.label} color={color}>
            {item.label}
          </Typography>
        </Link>
      ))}
    </div>
  );
};

