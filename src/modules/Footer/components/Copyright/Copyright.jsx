import styles from './Copyright.module.scss'
import { GeeksLogo } from '@/app/assets/icons/GeeksLogo'
import { geeksLink } from '@/utils/constants/constants'

export const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <a
        href={geeksLink}
        target='_blank'
        className={styles.contentSection}
      >
        <p className={styles.title}>
          Made by GeeksPro
        </p>
        <div className={styles.logo}>
          <GeeksLogo />
        </div>
      </a>
    </div>
  )
}
