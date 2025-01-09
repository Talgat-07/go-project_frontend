import { Typography } from '@/ui/Typography/Typography'
import styles from './NotFound.module.scss'
import arrow from '@/app/assets/icons/backArrow.svg'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <main>
      <section className={styles.notFoundSection}>
        <Typography variant='h1' className={styles.errorCode}>
          404
        </Typography>
        <Typography variant='h2' className={styles.errorMessage}>
          Страница не найдена
        </Typography>
        <article className={styles.infoBLock}>
          <Link to={'/'}>
            <div className={styles.info}>
              <div>
                <img src={arrow} alt='back arrow' />
              </div>
              <Typography variant='p' className={styles.description}>
                На главную
              </Typography>
            </div>{' '}
          </Link>
          <div className={styles.underLine}></div>
        </article>
      </section>
    </main>
  )
}
