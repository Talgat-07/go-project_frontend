import styles from './VisaSupport.module.scss'
import { MultiContainer } from '@/ui/Multicontainer/Multicontainer'
import { Heading } from '@/ui/Heading/Heading'
import { Slider } from '@/ui/Slider/Slider'
import { VisaCard } from '../VisaSupport/ui/VisaCard/VisaCard'
import { useEffect } from 'react'
import { VisaSupportApi } from './api/VisaSupportApi'

export const VisaSupport = () => {
  const { visaData, visaRequest } = VisaSupportApi()

  useEffect(() => {
    visaRequest()
  }, [visaRequest])

  return (
    <>
      <MultiContainer>
        <div className={styles.headpart}>
          <Heading text='Визовая поддержка- Visa Go' />
        </div>
      </MultiContainer>
      <div className={styles.cards}>
        <Slider
          data={visaData}
          slidesPerView={4}
          renderItem={(item) => <VisaCard item={item} />}
          loop={true}
        />
      </div>
    </>
  )
}
