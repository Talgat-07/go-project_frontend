import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { TourDetailApi } from './api/TourDetailApi';
import { Loader } from '@/ui/Loader/Loader';
import { MultiContainer } from '@/ui/Multicontainer/Multicontainer';
import styles from './TourDetailComponent.module.scss';
import { Typography } from '@/ui/Typography/Typography';
import { Cards } from './components/Cards/Cards';
import { Slider } from '@/ui/Slider/Slider';
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import { Hero } from './components/Hero/Hero';
import { Heading } from '@/ui/Heading/Heading';
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton';

export const TourDetailComponent = () => {
  const { id } = useParams();
  const { tourDetailData, tourDetailRequest, isLoading } = TourDetailApi();

  useEffect(() => {
    if (id) {
      tourDetailRequest(id);
    }
  }, [id, tourDetailRequest]);

  if (isLoading) {
    return <Loader />;
  }

  const cardData = tourDetailData?.mini_info_frames[0];
  const infoData = tourDetailData?.why_visit_frame[0];
  const heroData = tourDetailData?.tour_banner[0];

  return (
    <>
      <MultiContainer className={styles.container}>
        <Hero item={heroData} />
        <Cards item={cardData} />
        <InfoBlock item={infoData} />
        <SwitchButton className={styles.button} maxWidth='208px'>Заказать тур</SwitchButton>
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
  );
};
