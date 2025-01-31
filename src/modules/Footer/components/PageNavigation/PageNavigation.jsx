import { Link, useNavigate } from 'react-router-dom'
import styles from './PageNavigation.module.scss'
import { Typography } from '@/ui'
import { PATH } from '@/utils/constants/constants'
import { useTranslation } from 'react-i18next'
import { scrollToSection } from '@/utils/helpers/helpers'
import { scrollToTop } from '@/utils/helpers/helpers'

export const PageNavigation = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleScrollToSection = (sectionId) => scrollToSection(navigate, sectionId)

  const navigation = [
    { path: PATH.tours, label: t('header.tours') },
    {
      path: '',
      label: t('header.visas'),
      onClick: () => handleScrollToSection('visas'),
    },
    { path: PATH.delivery, label: t('header.delivery') },
  ]

  return (
    <div className={styles.links}>
      {navigation.map((item, index) =>
        item.onClick ? (
          <span key={index} onClick={item.onClick} className={styles.navItem}>
            <Typography>{item.label}</Typography>
          </span>
        ) : (
          <Link to={item.path} key={index} onClick={() => scrollToTop()} className={styles.navItem}>
            <Typography>{item.label}</Typography>
          </Link>
        ),
      )}
    </div>
  )
}
