import styles from './ReviewSlider.module.scss';
import stylesCard from '@/ui/ReviewCard/ReviewCard.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReviewCard } from '@/ui';

export const ReviewSlider = ({ reviewsData = [] }) => {
  const swiperSettings = {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    navigation: false,
    spaceBetween: 2,
  };

  return (
    <Swiper
      className={`${stylesCard.customSlider} ${styles.swiper}`}
      {...swiperSettings}
    >
      {reviewsData.map((item, index) => (
        <SwiperSlide key={index} className={stylesCard.slide}>
          <ReviewCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
