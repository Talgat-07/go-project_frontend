import { Typography } from '@/ui/Typography/Typography'
import styles from './Copyright.module.scss'
import geeksLogo from '@/app/assets/icons/geeksLogo.svg'
import { Link } from 'react-router-dom'

export const Copyright = () => {
  return (
    <main className={styles.copyright}>
      <section>
        <Link
          to={'https://geeks.kg/geeks-pro'}
          target='_blank'
          className={styles.contentSection}
        >
          <Typography variant='h4' className={styles.title}>
            made by geekspro
          </Typography>
          <div className={styles.logo}>
            <img src={geeksLogo} alt='icon' />
          </div>
        </Link>
      </section>
    </main>
  )
}
