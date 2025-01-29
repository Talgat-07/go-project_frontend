import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'
import styles from './End.module.scss'
import { Typography } from '@/ui/Typography/Typography'

export const EndSection = () => {
  return (
    <section className={styles.endSection}>
      <Typography variant='h4' weight='fw5' className={styles.title}>
        Расширите свой круг деловых контактов и сделаете новые связи Увидеть
        широкий ассортимент китайских товаров и оценить их
      </Typography>
      <SwitchButton maxWidth='208px'>Заказать визу</SwitchButton>
    </section>
  )
}
