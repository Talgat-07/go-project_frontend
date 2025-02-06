import styles from './VisaSupport.module.scss'
import { Heading } from '@/ui'
import { Slider } from '@/ui'
import { VisaCard } from './components/VisaCard/VisaCard'
import { useEffect } from 'react'
import { VisaSupportApi } from '../../api/VisaSupportApi'
import globe from '@/app/assets/images/visaSupBg.png'
import left from '@/app/assets/images/leftAirplane.png'
import right from '@/app/assets/images/rightAirplane.png'
import center from '@/app/assets/images/centerAirplane.png'
import { useTranslation } from 'react-i18next'

export const VisaSupport = () => {
  const { t } = useTranslation()
  const { visaData, visaRequest } = VisaSupportApi()

  useEffect(() => {
    visaRequest()
  }, [visaRequest])

  if (!visaData.length) {
    return null
  }

  return (
    <div className={styles.visa} id='visas'>
      <div className={styles.background}>
        <div className={styles.globe}>
          <img src={globe} alt='globe' />
        </div>
        <div className={styles.airplanes}>
          <div className={styles.left}>
            <img src={left} alt='left elem' />
          </div>
          <div className={styles.center}>
            <img src={center} alt='center elem' />
          </div>
          <div className={styles.right}>
            <img src={right} alt='right elem' />
          </div>
        </div>
      </div>
      <Heading text={t("headings.visaSupport")} />
      <div className={styles.cards}>
        <Slider
          data={visaData}
          slidesPerView={4}
          renderItem={(item) => <VisaCard item={item} />}
          loop={true}
        />
      </div>
    </div>
  )
}
