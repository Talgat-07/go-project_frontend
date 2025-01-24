import { Typography } from '@/ui/Typography/Typography'
import styles from './Content.module.scss'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'
import { MultiContainer } from '@/ui/MultiContainer/MultiContainer'

export const Content = ({ slide }) => {
  return (
    <section className={styles.banner}>
      <img src={slide.image} alt='background banner' />
      <MultiContainer className={styles.frame}>
        <Typography className={styles.title} variant='h1'>
          {slide.title}
        </Typography>
        <Typography className={styles.description} variant='p' useParser='true'>
          {slide.description}
        </Typography>
        <SwitchButton maxWidth='195px' padding='14px 45px'>
          Подробнее
        </SwitchButton>
      </MultiContainer>
    </section>
  )
}