import { useEffect } from 'react'
import { ReviewsApi } from './api/ReviewsApi'
import { Heading } from '@/ui/Heading/Heading'
import { ReviewCard } from '@/ui/ReviewCard/ReviewCard'
import { Slider } from '@/ui/Slider/Slider'
import styles from './Reviews.module.scss'

export const Reviews = () => {
  const { reviewsData, reviewsRequest } = ReviewsApi()

  useEffect(() => {
    reviewsRequest()
  }, [reviewsRequest])

  if (!reviewsData.length) {
    return null;
  }

  return (
    <secton id="reviews">
      <Heading text={'Отзывы'} />
      <Slider
        className={styles.customSlider}
        centeredSlides={true}
        data={reviewsData}
        renderItem={(item) => (
          <ReviewCard item={item} className={styles.additional} />
        )}
        loop={true}
        spaceBetween={13}
      />
    </secton>
  )
}
