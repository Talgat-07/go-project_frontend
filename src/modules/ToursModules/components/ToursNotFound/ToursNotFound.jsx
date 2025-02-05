import { Typography } from '@/ui/index.js'
import styles from './ToursNotFound.module.scss'

export const ToursNotFound = ({ handleReset }) => {
  return (
    <div className={styles.notFound}>
      <Typography variant='h2' weight='fw5' color='#FF6600'>
        Не нашли нужный тур? Возможно, стоит убрать некоторые фильтры.
      </Typography>
      <button className={styles.resetBtn} onClick={handleReset}>
        <Typography variant='fs22' weight='fw5' color='#FF6600'>
          Сбросить фильтры
        </Typography>
      </button>
    </div>
  )
}
