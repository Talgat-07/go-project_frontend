import { Typography } from '@/ui/Typography/Typography'
import styles from './DateProp.module.scss'

export const DateProp = ({ dateProp }) => {
  return (
    <>
      {dateProp.mini_info_frames.map((date) => (
        <>
          <Typography variant='p' className={styles.date}>
            {date.tour_date}
          </Typography>
          <Typography variant='p' className={styles.price}>
            {date.price}
          </Typography>
        </>
      ))}
    </>
  )
}
