import { useEffect } from 'react';
import { ReviewsApi } from '../../api/ReviewsApi';
import { Heading } from '@/ui';
import styles from './Reviews.module.scss';
import 'swiper/css';
import { MultiContainer } from '@/ui';
import { ReviewSlider } from './components/ReviewSlider/ReviewSlider';

export const Reviews = () => {
  const { reviewsData, reviewsRequest } = ReviewsApi();

  useEffect(() => {
    reviewsRequest();
  }, [reviewsRequest]);

  if (!reviewsData.length) {
    return null;
  }

  return (
    <MultiContainer>
      <section id='reviews'>
        <div className={styles.bgElem} />
        <Heading text={'Отзывы'} />
        <ReviewSlider reviewsData={reviewsData} />
      </section>
    </MultiContainer>
  );
};
