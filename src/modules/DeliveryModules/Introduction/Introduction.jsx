import { MultiContainer } from '@/ui/Multicontainer/Multicontainer'
import styles from './Introduction.module.scss'
import { Heading } from '@/ui/Heading/Heading'
import { DeliveryApi } from './api/DeliveryApi'
import { useEffect } from 'react'
import { TextList } from './components/TextList/TextList'
import { Slider } from '@/ui/Slider/Slider'
import { Typography } from '@/ui/Typography/Typography'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'
import { DeliveryAirplane } from '@/app/assets/icons/DeliveryAirplane'
import { CloudIcon } from '@/app/assets/icons/CloudIcon'
import { AirplaneGroup } from '@/app/assets/icons/AirplaneGroup'
import { AirplanePath } from '@/app/assets/icons/AirplanePath'
import { Airplane } from '@/app/assets/icons/Airplane'
import { RightAirPath } from '@/app/assets/icons/RightAirPath'

export const Introduction = () => {
  const { deliveryData, deliveryRequest } = DeliveryApi()

  useEffect(() => {
    deliveryRequest()
  }, [deliveryRequest])

  if (!deliveryData.length) {
    return null
  }

  return (
    <MultiContainer>
      <section className={styles.introSection}>
        <CloudIcon className={styles.cloud} />
        <AirplanePath className={styles.path} />
        <Airplane className={styles.airplane} color={'#FF572233'} />
        <RightAirPath className={styles.RightPath} />
        <Airplane className={styles.RightAirplane} color={'#FF572233'} />
        <Heading text={deliveryData[0]?.title} />
        <TextList data={deliveryData} />
        <Slider
          className={styles.slider}
          data={deliveryData[0]?.images}
          slidesPerView={5}
          loop={true}
          spaceBetween={20}
          renderItem={(item) => (
            <div className={styles.image}>
              <img src={item.image} alt='delivery image' />
            </div>
          )}
        />
        <div className={styles.linkerZone}>
          <Typography
            useParser
            variant='fs24'
            color={'#000000'}
            className={styles.description}
          >
            {deliveryData[0]?.description}
          </Typography>
          <AirplaneGroup className={styles.airplanes} />
          <SwitchButton
            fontSize={'fs16'}
            maxWidth={250}
            text={'Переходи на Easy Go'}
            className={styles.button}
          >
            <DeliveryAirplane color={'#FFFFFF'} className={styles.airIcon} />
          </SwitchButton>
        </div>
      </section>
    </MultiContainer>
  )
}
