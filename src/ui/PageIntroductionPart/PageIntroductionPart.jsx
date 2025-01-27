import { MultiContainer } from '@/ui/Multicontainer/Multicontainer'
import styles from './PageIntroductionPart.module.scss'
import { Heading } from '@/ui/Heading/Heading'
import { Slider } from '@/ui/Slider/Slider'
import { Typography } from '@/ui/Typography/Typography'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'
import { DeliveryAirplane } from '@/app/assets/icons/DeliveryAirplane'
import { CloudIcon } from '@/app/assets/icons/CloudIcon'
import { AirplaneGroup } from '@/app/assets/icons/AirplaneGroup'
import { AirplanePath } from '@/app/assets/icons/AirplanePath'
import { Airplane } from '@/app/assets/icons/Airplane'
import { RightAirPath } from '@/app/assets/icons/RightAirPath'
import { SharedTextList } from '@/ui/SharedTextList/SharedTextList'
import { InsideBtnTruck } from '@/app/assets/icons/InsideBtnTruck'

export const PageIntroductionPart = ({ data }) => {
  if (!data.length) {
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
        <Heading text={data[0]?.title} />
        <SharedTextList data={data} />
        <Slider
          className={styles.slider}
          data={data[0]?.images}
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
            {data[0]?.description}
          </Typography>
          <AirplaneGroup className={styles.airplanes} />
          {data[0]?.easy_go_url && (
            <a
              href={data[0]?.easy_go_url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <SwitchButton
                fontSize={'fs16'}
                maxWidth={250}
                text={'Переходи на Easy Go'}
                className={styles.button}
              >
                <InsideBtnTruck className={styles.airIcon} />
              </SwitchButton>
            </a>
          )}
        </div>
      </section>
    </MultiContainer>
  )
}
