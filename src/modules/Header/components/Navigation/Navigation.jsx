import { Link, useNavigate } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { PATH } from '@/utils/constants/constants';
import { Typography } from '@/ui/Typography/Typography';
import { useTranslation } from 'react-i18next';

export const Navigation = ({ color }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  const navigationList = [
    { path: PATH.tours, label: t('header.tours') },
    { path: PATH.visa, label: t('header.visas') },
    { path: PATH.delivery, label: t('header.delivery') },
    {
      path: '',
      label: t('header.aboutUs'),
      onClick: () => handleScrollToSection('about-us'),
    },
    {
      path: '',
      label: t('header.reviews'),
      onClick: () => handleScrollToSection('reviews'),
    },
  ];

  return (
    <div className={styles.navigation}>
      {navigationList.map((item, index) =>
        item.onClick ? (
          <span
            key={index}
            onClick={item.onClick}
          >
            <Typography weight="fw6" className={styles.label} color={color}>
              {item.label}
            </Typography>
          </span>
        ) : (
          <Link to={item.path} key={index}>
            <Typography weight="fw6" className={styles.label} color={color}>
              {item.label}
            </Typography>
          </Link>
        )
      )}
    </div>
  );
};
