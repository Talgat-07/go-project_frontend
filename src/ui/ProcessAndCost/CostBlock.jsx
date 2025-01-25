import { MultiContainer } from '@/ui/Multicontainer/Multicontainer'
import styles from './CostBlock.module.scss'
import { Typography } from '@/ui/Typography/Typography'
import { costDeadlineData } from '@/utils/constants/constants'
import { CloudIcon } from '@/app/assets/icons/CloudIcon'

export const CostBlock = () => {
  return (
    <MultiContainer>
      <section className={styles.costProcSection}>
        <div className={styles.yellowCircle}>&nbsp;</div>
        <CloudIcon className={styles.cloud} />
        <CloudIcon className={styles.secondCloud} />
        <div className={styles.heading}>
          <Typography color={'#FF6600'} variant='h5'>
            Процесс, Стоимость, Сроки и Услуги
          </Typography>
        </div>
        <div className={styles.additionList}>
          {costDeadlineData.map((item, index) => (
            <div key={index} className={styles.infoFiled}>
              <Typography variant='fs24' color={'#000000'}>
                {item.title}
              </Typography>
              <ul>
                {item.subTitle && (
                  <div className={styles.subTitle}>
                    <Typography variant='fs24' color={'#454545'}>
                      {item.subTitle}
                    </Typography>
                  </div>
                )}
                {item.descriptions.map((item, index) => (
                  <li key={index}>
                    <Typography color={'#454545'} variant='fs24'>
                      {item.description}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.questionZone}>
          <Typography
            color={'#FF6600'}
            variant='h5'
            className={styles.smallTitle}
          >
            Хотите рассчитать стоимость или узнать больше?
          </Typography>
          <Typography color='#454545' variant={'fs20'}>
            Свяжитесь с представителем логистической компании для консультации и
            уточнения деталей.
          </Typography>
        </div>
      </section>
    </MultiContainer>
  )
}
