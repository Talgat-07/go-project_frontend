import { MultiContainer } from '@/ui/Multicontainer/Multicontainer'
import styles from './PageIntroductionPart.module.scss'
import { Heading } from '@/ui/Heading/Heading'
import { Slider } from '@/ui/Slider/Slider'
import { Typography } from '@/ui/Typography/Typography'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'
import { SharedTextList } from '@/ui/SharedTextList/SharedTextList'
import { CloudIcon } from '@/app/assets/icons/CloudIcon'
import { AirplanePath } from '@/app/assets/icons/AirplanePath'
import { Airplane } from '@/app/assets/icons/Airplane'
import { InsideBtnTruck } from '@/app/assets/icons/InsideBtnTruck'
import { RightAirPath } from '@/app/assets/icons/RightAirPath'
import { AirplaneGroup } from '@/app/assets/icons/AirplaneGroup'
import { useModalStore } from '@/utils/hooks/useModalStore'
import { CostBlock } from '..'
import { FormModal } from '../Form/Form'
import { useTranslation } from 'react-i18next'

export const PageIntroductionPart = ({
  data = [],
  title,
  subtitle,
  airDelivery,
  cargoDelivery,
  imagesArray = [],
  easyGoLink,
  costAndProcess,
  individualTours = false,
  btnText,
  individualIntro,
  deliveryTours = false,
  maxWidth,
}) => {
  const { t } = useTranslation()
  const { openModal } = useModalStore()
  if (!data.length) return null

  const switchButton = (
    <SwitchButton
      fontSize='fs16'
      maxWidth={maxWidth}
      text={btnText}
      onClick={openModal}
      className={`${styles.button} ${deliveryTours ? styles.delivery : ''} ${individualTours ? styles.individualTours : ''
        }`}
    >
      {deliveryTours && <InsideBtnTruck className={styles.airIcon} />}
    </SwitchButton>
  )

  return (
    <MultiContainer>
      <div className={styles.divisionOfTwoPages}>
        <section className={styles.introSection}>
          <CloudIcon className={styles.cloud} />
          <AirplanePath className={styles.path} />
          <Airplane className={styles.airplane} color='#FF572233' />
          <RightAirPath className={styles.RightPath} />
          <Airplane className={styles.RightAirplane} color='#FF572233' />
          <Heading text={title} />
          <SharedTextList
            deliveryTours={deliveryTours}
            subtitle={subtitle}
            individualIntro={individualIntro}
            cargoDelivery={cargoDelivery}
            airDelivery={airDelivery}
          />
          <Slider
            className={styles.slider}
            data={imagesArray}
            slidesPerView={5}
            loop
            spaceBetween={20}
            renderItem={({ image }) => (
              <div className={styles.image}>
                <img src={image} alt='delivery image' />
              </div>
            )}
          />
          <div className={styles.linkerZone}>
            <Typography
              useParser
              variant='fs24'
              color='#000000'
              className={styles.description}
            >
              {t("indTourPage.infoText")}
            </Typography>
            <AirplaneGroup className={styles.airplanes} />
            {deliveryTours && easyGoLink ? (
              <a
                className={styles.linker}
                href={easyGoLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                {switchButton}
              </a>
            ) : (
              individualTours && switchButton
            )}
          </div>
        </section>
        <section className={styles.costAndProcess}>
          <CostBlock processAndCost={costAndProcess} />
        </section>
      </div>
      <FormModal themeTitle={title} />
    </MultiContainer>
  )
}
