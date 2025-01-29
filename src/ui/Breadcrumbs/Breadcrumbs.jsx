import { Link, useLocation } from 'react-router-dom'
import styles from './Breadcrumbs.module.scss'
import { Typography } from '../Typography/Typography'
import { useTranslation } from 'react-i18next'
import { BreadcrumbsArrow } from '@/app/assets/icons/BreadcrumbsArrow'
import { PATH } from '@/utils/constants/constants'
import { MultiContainer } from '../Multicontainer/Multicontainer'

const data = {
  home: 'home',
  tours: 'header.tours',
  'visa-support': 'header.visas',
  delivery: 'header.delivery',
}

export const Breadcrumbs = () => {
  const location = useLocation()
  const { t } = useTranslation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  if (pathnames.length === 0 || !(pathnames[pathnames.length - 1] in data)) {
    return null
  }

  return (
    <MultiContainer>
      <div className={styles.block}>
        {pathnames.length >= 1 && (
          <div className={styles.content}>
            <Link to={PATH.home}>
              <Typography variant='fs16' weight='fw5'>
                {t(data.home)}
              </Typography>
            </Link>
            <BreadcrumbsArrow />
          </div>
        )}
        {pathnames.map((pathname, index) => {
          const translatedPathname = t(data[pathname]) || pathname
          const isLast = index === pathnames.length - 1
          return (
            <span className={styles.breadcrumbs} key={index}>
              {isLast ? (
                <Typography variant='fs16' weight='fw5' className={styles.text}>
                  {translatedPathname}
                </Typography>
              ) : (
                <div className={styles.content}>
                  <Link to={`/${pathnames.slice(0, index + 1).join('/')}`}>
                    <Typography
                      variant='fs16'
                      weight='fw5'
                      className={styles.text}
                    >
                      {translatedPathname}
                    </Typography>
                  </Link>
                  <BreadcrumbsArrow />
                </div>
              )}
            </span>
          )
        })}
      </div>
    </MultiContainer>
  )
}
