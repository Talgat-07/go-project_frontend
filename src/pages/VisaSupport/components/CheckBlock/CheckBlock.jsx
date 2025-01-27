import { Typography } from '@/ui/Typography/Typography'
import styles from './CheckBlock.module.scss'
import { BiSolidCheckCircle } from 'react-icons/bi'

export const CheckBlock = () => {
  return (
    <section className={styles.checkSection}>
      <Typography variant='h5' className={styles.title}>
        Эксп. помощь
      </Typography>
      <div className={styles.checkFrameContainer}>
        <div className={styles.checkFrame}>
          <BiSolidCheckCircle color='#FF6600' size={50} />
          <Typography variant='fs24' useParser={true}>
            Консультирование по выбору визы и требованиям для ее получения
          </Typography>
        </div>
        <div className={styles.checkFrame}>
          <BiSolidCheckCircle color='#FF6600' size={50} />
          <Typography variant='fs24' useParser={true}>
            Проверка и подготовка всех необходимых документов
          </Typography>
        </div>
      </div>
    </section>
  )
}
