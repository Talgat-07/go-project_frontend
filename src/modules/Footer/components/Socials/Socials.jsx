import styles from './Socials.module.scss'
import { Link } from 'react-router-dom'
import { QR } from './component/QR/QR'
import { WhappIcon } from '@/app/assets/icons/WhappIcon';
import { TgIcon } from '@/app/assets/icons/TgIcon';
import { TtIcon } from '@/app/assets/icons/TtIcon';

export const Socials = ({ data }) => {
  
  return (
    <>
      {data.map((item) => (
        <article className={styles.qrBlock} key={item.id}>
          <QR />
          <div className={styles.iconsContainer}>
            <Link to={item.partners_whatsapp} target='_blank'>
              <WhappIcon />
            </Link>
            <Link to={item.telegram_link} target='_blank'>
              <TgIcon />
            </Link>
            <Link to={item.tiktok_link} target='_blank'>
              <TtIcon />
            </Link>
          </div>
        </article>
      ))}
    </>
  )
}
