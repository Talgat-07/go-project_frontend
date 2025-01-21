import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { PATH } from '@/utils/constants/constants'
import { Typography } from '@/ui/Typography/Typography'
import { useTranslation } from 'react-i18next'

export const Navigation = ({ color }) => {
  const { t } = useTranslation()

  const navigationList = [
    { path: PATH.tours, label: t('header.tours') },
    { path: PATH.visa, label: t('header.visas') },
    { path: PATH.delivery, label: t('header.delivery') },
    { path: '', label: t('header.aboutUs') },
    { path: '', label: t('header.reviews') },
  ]

  return (
    <div className={styles.navigation}>
      {navigationList.map((item, index) => (
        <Link to={item.path} key={index}>
          <Typography weight='fw6' className={styles.label} color={color}>
            {item.label}
          </Typography>
        </Link>
      ))}
    </div>
  )
}
