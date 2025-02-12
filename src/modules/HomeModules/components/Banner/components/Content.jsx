import { Typography } from '@/ui'
import styles from './Content.module.scss'
import { SwitchButton } from '@/ui'
import { MultiContainer } from '@/ui'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Content = ({ slide }) => {
  const { t } = useTranslation()

  console.log(slide?.start_block[0].title)

  return (
    <section className={styles.banner}>
      <div className={styles.img}>
        <img src={slide?.start_block[0].image} alt='background banner' />
        <div className={styles.overlay} />
      </div>
      <MultiContainer className={styles.frame}>
        <Typography className={styles.title} variant='h1' weight='fw6'>
          {slide?.start_block[0].title}
        </Typography>
        <Typography className={styles.description} truncate={100}>
          {slide?.start_block[0].description}
        </Typography>
        <Link to={`/tours/${slide.slug}`} className={styles.btnLink} target="_top">
          <SwitchButton maxWidth='195px' padding='14px 45px'>
            {t("buttons.more")}
          </SwitchButton>
        </Link>
      </MultiContainer>
    </section>
  )
}