import { useRef } from 'react';
import styles from './ReviewSlider.module.scss';
import stylesCard from '@/ui/ReviewCard/ReviewCard.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReviewCard } from '@/ui';
import 'swiper/css';

export const ReviewSlider = ({ reviewsData = [] }) => {
  const swiperRef = useRef(null);
  const swiperSettings = {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    navigation: false,
    spaceBetween: 2,
    speed: 600,
    slidesPerGroup: 1,
    watchSlidesProgress: true,
    onSwiper: (swiper) => {
      swiperRef.current = swiper;
    },
  };

  const handleSlideClick = (index) => {
    if (!swiperRef.current) return;
    if (swiperRef.current.realIndex === index) {
      return;
    }
    swiperRef.current.slideToLoop(index, 500);
  };

  return (
    <Swiper
      className={`${stylesCard.customSlider} ${styles.swiper}`}
      {...swiperSettings}
    >
      {reviewsData.map((item, index) => (
        <SwiperSlide key={index} className={stylesCard.slide}>
          <ReviewCard item={item} onClick={() => handleSlideClick(index)} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
