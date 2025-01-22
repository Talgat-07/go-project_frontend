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
        <Typography variant='p' className={styles.description}>
          {item.text}
        </Typography>
      </div>
      <div className={styles.imgBlock}>
        <Link to={item.video} target='_blank'>
          <div className={styles.img}>
            <img src={item.photo} alt='image' />
          </div>
          <div className={styles.playBtn}>
            <MdPlayArrow color='#FF6600' size={75} />
          </div>
        </Link>
      </div>
    </article>
  )
}
