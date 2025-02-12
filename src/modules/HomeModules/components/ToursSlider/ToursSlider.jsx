import styles from './ToursSlider.module.scss'
import { Typography } from '@/ui'
import { Link } from 'react-router-dom'
import { MultiContainer } from '@/ui'
import { Heading } from '@/ui'
import { PATH } from '@/utils/constants/constants'
import { Slider } from '@/ui'
import { TourCard } from '@/ui'
import { ToursSliderApi } from '../../api/ToursSliderApi'
import { useEffect } from 'react'
import { Airplane } from '@/app/assets/icons/Airplane'
import { Wallet } from '@/app/assets/icons/Wallet'
import { useTranslation } from 'react-i18next'

export const ToursSlider = () => {
  const { t } = useTranslation()
  const { toursData, toursRequest } = ToursSliderApi()

  useEffect(() => {
    toursRequest()
  }, [toursRequest])

  if (!toursData || !toursData.length) {
    return null
  }

  return (
    <div>
      <MultiContainer>
        <Heading text={t("header.tours")} />
        <div className={styles.moreLink}>
          <Link to={PATH.tours} target='_top'>
            <Typography variant='fs24' weight='fw6' color='#FA7335'>
              {t("buttons.allTours")}
            </Typography>
            <Airplane className={styles.airplane} />
          </Link>
        </div>
      </MultiContainer>
      <div className={styles.cards}>
        <Slider
          data={toursData}
          slidesPerView={3}
          loop={true}
          renderItem={(item) => <TourCard item={item} />}
        />
      </div>
      <MultiContainer>
        <Link to={PATH.individualTours} target='_top'>
          <div className={styles.individualTour}>
            <Wallet />
            <Typography color='#FF6600' weight='fw5' variant='fs20'>
              {t("buttons.calcilateIndTour")}
            </Typography>
          </div>
        </Link>
      </MultiContainer>
    </div>
  )
}
