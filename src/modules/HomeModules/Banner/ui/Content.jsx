import { Typography } from '@/ui/Typography/Typography'
import styles from './Content.module.scss'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'
import { MultiContainer } from '@/ui/MultiContainer/MultiContainer'
import { SwiperSlide } from 'swiper/react'

export const Content = ({ item }) => {
  return (
    <SwiperSlide className={styles.banner} key={item.id}>
      <img src={item.image} alt='background banner' />
      <MultiContainer className={styles.frame}>
        <Typography className={styles.title} variant='h1'>
          {item.title}
        </Typography>
        <Typography className={styles.description} variant='p' useParser='true'>
          {item.description}
        </Typography>
        <SwitchButton maxWidth='195px' padding='14px 45px'>
          Подробнее
        </SwitchButton>
      </MultiContainer>
    </SwiperSlide>
  )
}
