import { Typography } from '@/ui'
import styles from './DateProp.module.scss'

export const DateProp = ({ dateProp }) => {
  return (
    <>
      {dateProp.mini_info_frames.map((date) => (
        <>
          <Typography variant='fs18' weight='fw5' color='#fff' className={styles.date}>
            {date.tour_date}
          </Typography>
          <Typography variant='fs16' weight='fw7' color='#fff' className={styles.price}>
            {date.price}
          </Typography>
        </>
      ))}
    </>
  )
}
