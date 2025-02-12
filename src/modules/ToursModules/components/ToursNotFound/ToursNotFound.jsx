import { Typography } from '@/ui/index.js'
import styles from './ToursNotFound.module.scss'
import { useTranslation } from 'react-i18next'

export const ToursNotFound = ({ handleReset }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.notFound}>
      <Typography variant='h2' weight='fw5' color='#FF6600'>
        {t("filter.notFound")}
      </Typography>
      <button className={styles.resetBtn} onClick={handleReset}>
        <Typography variant='fs22' weight='fw5' color='#FF6600'>
          {t("filter.resetFilters")}
        </Typography>
      </button>
    </div>
  )
}
