import styles from './ToursSlider.module.scss';
import { Typography } from '@/ui/Typography/Typography';
import { Link } from 'react-router-dom';
import { MultiContainer } from '@/ui/Multicontainer/Multicontainer';
import { Heading } from '@/ui/Heading/Heading';
import { PATH } from '@/utils/constants/constants';
import { ArrowRight } from '@/app/assets/icons/ArrowRight';
import { Slider } from '@/ui/Slider/Slider';
import { TourCard } from '@/ui/TourCard/TourCard';
import { ToursSliderApi } from './api/ToursSliderApi';
import { useEffect } from 'react';

export const ToursSlider = () => {
  const { toursData, toursRequest } = ToursSliderApi();

  useEffect(() => {
    toursRequest();
  }, [toursRequest]);

  if (!toursData.length) {
    return null;
  }

  return (
    <div>
      <MultiContainer>
        <Heading text='Туры' />
        <div className={styles.moreLink}>
        <Link to={PATH.tours}>
          <Typography variant='fs24' weight="fw6" color='#FA7335'>
            Все туры
          </Typography>
          <ArrowRight />
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
        <div className={styles.individualTour}>
          <Typography color="#FF6600" weight="fw5" variant="fs20" >
            Рассчитать индивидуальный тур
          </Typography>
        </div>
      </MultiContainer>
    </div>
  );
};
