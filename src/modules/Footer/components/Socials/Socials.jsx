import styles from './Socials.module.scss'
import icon_1 from '@/app/assets/icons/whapp_icon.svg'
import icon_2 from '@/app/assets/icons/tg_icon.svg'
import icon_3 from '@/app/assets/icons/tt_icon.svg'
import { Link } from 'react-router-dom'
import { QR } from './component/QR/QR'

export const Socials = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <article className={styles.qrBlock} key={item.id}>
          <QR />
          <div className={styles.iconsContainer}>
            <Link to={item.partners_whatsapp} target='_blank'>
              <img src={icon_1} alt='whapp icon' />
            </Link>
            <Link to={item.telegram_link} target='_blank'>
              <img src={icon_2} alt='tgrm icon' />
            </Link>
            <Link to={item.tiktok_link} target='_blank'>
              <img src={icon_3} alt='tt icon' />
            </Link>
          </div>
        </article>
      ))}
    </>
  )
}
