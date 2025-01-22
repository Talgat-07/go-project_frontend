import { Link } from 'react-router-dom'
import { Typography } from '../Typography/Typography'
import { MdPlayArrow } from 'react-icons/md'
import styles from './ReviewCard.module.scss'

export const ReviewCard = ({ item, className }) => {
  return (
    <article className={`${styles.reviewFrame} ${className && className}`}>
      <div className={styles.info}>
        <Typography variant='h3' className={styles.title}>
          {item.title}
        </Typography>
        <Typography variant='fs16' color="#3C3C43D9" weight='fw5'>Бизнес тур</Typography>
        <Typography useParser variant='fs16' className={styles.description}>
          {item.text}
        </Typography>
      </div>
      <div className={styles.imgBlock}>
        <a href={item.video} target='_blank'>
          <div className={styles.img}>
            <img src={item.photo} alt='image' />
          </div>
          <div className={styles.playBtn}>
            <MdPlayArrow color='#FF6600' size={75} />
          </div>
        </a>
      </div>
    </article>
  )
}
