import { Typography } from '@/ui/Typography/Typography'
import styles from './AboutUs.module.scss'
import img from '@/app/assets/images/temporarily_img.jpeg'

export const AboutUs = () => {
  return (
    <section className={styles.aboutUsSection}>
      <Typography variant='h2' className={styles.title}>
        О нас
      </Typography>
      <div className={styles.container}>
        <div className={styles.infoImg}>
          <img src={img} alt='info image' />
        </div>
        <Typography variant='h2' className={styles.description}>
          "Go Project" — ваш проводник в мир бизнес-туризма. Мы создаём
          авторские и индивидуальные туры для предпринимателей из СНГ,
          обеспечиваем визовую поддержку по ключевым направлениям (Китай, США,
          Шенген и Англия) и помогаем находить новые возможности для вашего
          бизнеса. Наша миссия — создавать туры, которые приносят вдохновение,
          знания и пользу вашему делу.
        </Typography>
      </div>
    </section>
  )
}
