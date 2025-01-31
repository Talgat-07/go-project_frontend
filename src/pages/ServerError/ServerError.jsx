import { Typography } from '@/ui'
import styles from './ServerError.module.scss'
import { useState } from 'react'

export const ServerError = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleReload = () => {
    setIsLoading(true)
    window.location.reload()
  }

  return (
    <section className={styles.notFoundSection}>
      <Typography variant='h1' className={styles.errorCode} color="#fff">
        OOPS
      </Typography>
      <Typography variant='h2' className={styles.errorMessage} color="#fff">
        У нас временные технические неполадки.
      </Typography>
      <button onClick={handleReload} className={isLoading ? styles.loading : styles.reloadButton}>
        {isLoading && (
          <div className={styles.loader}></div>
        )}
        <Typography variant='fs24' weight='fw5' color="#fff">
          Перезагрузить
        </Typography>
      </button>
    </section>
  )
}
