import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { PATH } from '@/utils/constants/constants'
import { Typography } from '@/ui'
import { useTranslation } from 'react-i18next'
import { scrollToTop } from '@/utils/helpers/helpers'
import { scrollToSection } from '@/utils/helpers/helpers'

export const Navigation = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === PATH.home

  const handleScrollToSection = (sectionId) => scrollToSection(navigate, sectionId)

  const navigationList = [
    { path: PATH.tours, label: t('header.tours') },
    {
      path: '',
      label: t('header.visas'),
      onClick: () => handleScrollToSection('visas'),
    },
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
  ]

  return (
    <div className={styles.navigation}>
      {navigationList.map((item, index) =>
        item.onClick ? (
          <span key={index} onClick={item.onClick} className={styles.navItem}>
            <Typography
              weight='fw6'
              variant='fs20'
              className={`${styles.label} ${isHomePage && styles.homeLabel}`}
            >
              {item.label}
            </Typography>
          </span>
        ) : (
          <Link
            to={item.path}
            key={index}
            className={styles.navItem}
            onClick={() => scrollToTop()}
          >
            <Typography
              variant='fs20'
              weight='fw6'
              className={`${styles.label} 
              ${isHomePage && styles.homeLabel}
              ${location.pathname === item.path && styles.isActive}`}
            >
              {item.label}
            </Typography>
          </Link>
        ),
      )}
    </div>
  )
}
