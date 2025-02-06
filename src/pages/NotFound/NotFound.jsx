import { Typography } from '@/ui'
import styles from './NotFound.module.scss'
import { BackArrow } from '@/app/assets/icons/BackArrow'
import { Link } from 'react-router-dom'
import { PATH } from '@/utils/constants/constants'
import { useTranslation } from 'react-i18next'

export const NotFound = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.notFoundSection}>
      <Typography variant='h1' className={styles.errorCode} color="#fff">
        404
      </Typography>
      <Typography variant='h2' className={styles.errorMessage} color="#fff">
        {t("errorPage.notFound")}
      </Typography>
      <Link to={PATH.home}>
        <BackArrow />
        <Typography variant='fs24' weight='fw5' color="#fff">
          {t("errorPage.toMain")}
        </Typography>
      </Link>
    </section>
  )
}
