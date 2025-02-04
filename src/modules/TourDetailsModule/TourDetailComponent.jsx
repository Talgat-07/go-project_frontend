import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { TourDetailApi } from './api/TourDetailApi'
import { Loader } from '@/ui'
import { MultiContainer } from '@/ui'
import styles from './TourDetailComponent.module.scss'
import { Cards, TabBar } from './components'
import { Slider } from '@/ui'
import { InfoBlock } from './components'
import { Hero } from './components'
import { Heading } from '@/ui'
import { SwitchButton } from '@/ui'
import { Breadcrumbs } from '@/ui'
import bg from '@/app/assets/images/tourDetail.png'

export const TourDetailComponent = () => {
  const { id } = useParams()
  const { tourDetailData, tourDetailRequest, isLoading } = TourDetailApi()

  useEffect(() => {
    if (id) {
      tourDetailRequest(id)
    }
  }, [id, tourDetailRequest])

  if (isLoading) {
    return <Loader />
  }

  const cardData = tourDetailData?.mini_info_frames[0]
  const infoData = tourDetailData?.why_visit_frame[0]
  const heroData = tourDetailData?.tour_banner[0]
  const table = tourDetailData?.table

  return (
    <>
      <Breadcrumbs breadcrumbKey="tourDetail" thirdElement={tourDetailData?.title} />
      <MultiContainer className={styles.container}>
        <Hero item={heroData} title={tourDetailData?.title} />
        <Cards item={cardData} />
        <InfoBlock item={infoData} />
        <TabBar item={table} />
        <div className={styles.buttonBlock}>
          <div className={styles.bg}>
            <img src={bg} alt='bg' />
          </div>
          <SwitchButton className={styles.button} maxWidth='208px'>Заказать тур</SwitchButton>
        </div>
      </MultiContainer>
      <div className={styles.sliderBlock}>
        <Heading text="Фото отчет с прошлых туров" />
        <Slider
          className={styles.slider}
          data={tourDetailData?.photo_report}
          slidesPerView={3}
          loop={true}
          spaceBetween={20}
          renderItem={(item) => (
            <div className={styles.img} key={item?.id}>
              <img src={item?.image} alt={item?.id} />
            </div>
          )}
        />
      </div>
    </>
  )
}
