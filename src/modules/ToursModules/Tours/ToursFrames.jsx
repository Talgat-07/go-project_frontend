import styles from './ToursFrames.module.scss'
import { Typography } from '@/ui/Typography/Typography'
import { DateProp } from './component/DateProp'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'
import { Link } from 'react-router-dom'

export const ToursFrames = ({ countries = [] }) => {
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
      {countries.map((item) => (
        <article className={styles.frame} key={item.id}>
          <div className={styles.frameBg}>
            <img src={item.image} alt='background image' />
          </div>
          <div
            className={styles.tourInfo}
            style={{ background: translateColor(item.background_color) }}
          >
            <Typography
              variant='h3'
              className={styles.tourTitle}
              useParser='true'
            >
              {item.description}
            </Typography>
            <DateProp dateProp={item} />
          </div>
          <SwitchButton maxWidth='165px' className={styles.switchBtn}>
            Подробнее
          </SwitchButton>
        </article>
      ))}
    </section>
  )
}
