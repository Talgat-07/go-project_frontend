import { Typography } from '@/ui/Typography/Typography'
import styles from './ToursFilter.module.scss'

export const ToursFilter = () => {
  return (
    <section className={styles.filterSection}>
      <Typography variant='h1' className={styles.title}>
        Все туры
      </Typography>
      {/* <Typography variant='div' className={styles.dropdownBtn}>
        Страны
      </Typography>
      <div className={styles.dropdownList}>
        <Typography variant='p' className={styles.dropdownContent}>
          Вьетнам
        </Typography>
        <Typography variant='p' className={styles.dropdownContent}>
          США
        </Typography>
      </div> */}
      <select name='cars' className={styles.dropdownBtn}>
        <option value='1' className={styles.dropdownList}>
          Volvo
        </option>
        <option value='2' className={styles.dropdownList}>
          Saab
        </option>
        <option value='3' className={styles.dropdownList}>
          Mercedes
        </option>
      </select>
    </section>
  )
}
