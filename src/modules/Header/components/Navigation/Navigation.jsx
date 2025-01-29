import { Link, useNavigate, useLocation } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { PATH } from '@/utils/constants/constants'
import { Typography } from '@/ui/Typography/Typography'
import { useTranslation } from 'react-i18next'

export const Navigation = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === PATH.home

  const handleScrollToSection = (sectionId) => {
    navigate('/')
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        const sectionRect = section.getBoundingClientRect()
        const offset = window.innerHeight / 2 - sectionRect.height / 2
        const top = sectionRect.top + window.scrollY - offset

        window.scrollTo({
          top,
          behavior: 'smooth',
        })
      }
    }, 100)
  }

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
              className={`${styles.label} ${isHomePage && styles.homeLabel}`}
            >
              {item.label}
            </Typography>
          </span>
        ) : (
          <Link to={item.path} key={index} className={styles.navItem}>
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
