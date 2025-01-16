import styles from './ToursFrames.module.scss'
import { Typography } from '@/ui/Typography/Typography'
import { useEffect, useState } from 'react'
import { DateProp } from './component/DateProp'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'
import { Link } from 'react-router-dom'
import { ToursApi } from './api/ToursApi'

export const ToursFrames = () => {
  const { toursData, toursRequest } = ToursApi()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    toursRequest()

    if (toursData) {
      setLoading(false) // Set loading to false once data is fetched
    }
  }, [toursRequest, toursData])

  if (loading) return <div>Loading</div>

  const translateColor = (color) => {
    const colorMap = {
      Оранжевый:
        'linear-gradient(160deg,rgba(189, 99, 46, 0.86),rgba(0, 0, 0, 0.86))',
      Черный: 'linear-gradient(160deg,rgba(32, 49, 82, 1),rgba(0, 0, 0, 0.86))',
      Берёзовый:
        'linear-gradient(160deg,rgba(41, 218, 203, 0.86),rgba(0, 0, 0, 0.86))',
    }
    // Fallback to the original color if no translation
    return colorMap[color]
  }

  return (
    <section className={styles.toursSection}>
      {toursData.map((item) => (
        <article className={styles.frame} key={item.id}>
          <div className={styles.frameBg}>
            <img src={item.image} alt='background image' />
          </div>
          <div
            className={styles.tourInfo}
            style={{ background: translateColor(item.background_color) }}
          >
            <Typography variant='h3' className={styles.tourTitle}>
              {item.description}
            </Typography>
            <DateProp dateProp={item} />
          </div>
          <SwitchButton
            maxWidth='165px'
            padding='5px 20px'
            variant='animation_1'
            className={styles.switchBtn}
          >
            Подробнее
          </SwitchButton>
        </article>
      ))}
    </section>
  )
}
