import { useEffect } from 'react'
import { ReviewsApi } from './api/ReviewsApi'
import { Heading } from '@/ui/Heading/Heading'
import styles from './Reviews.module.scss'
import stylesCard from '@/ui/ReviewCard/ReviewCard.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { MultiContainer } from '@/ui/Multicontainer/Multicontainer'
import { ReviewCard } from '@/ui/ReviewCard/ReviewCard'

export const Reviews = () => {
  // const { reviewsData, reviewsRequest } = ReviewsApi()
  const reviewsData = [
    {
      title: 'Some review',
      text: 'Some text',
      photo:
        'https://www.figma.com/file/jfFkx2qL8YAwGaxIj8Z7GK/image/054dca4a21ae14f00a66fd13c10370475012dd0b',
    },
    {
      title: 'Some review',
      text: 'Some text',
      photo:
        'https://www.figma.com/file/jfFkx2qL8YAwGaxIj8Z7GK/image/054dca4a21ae14f00a66fd13c10370475012dd0b',
    },
    {
      title: 'Some review',
      text: 'Some text',
      photo:
        'https://www.figma.com/file/jfFkx2qL8YAwGaxIj8Z7GK/image/054dca4a21ae14f00a66fd13c10370475012dd0b',
    },
    {
      title: 'Some review',
      text: 'Some text',
      photo:
        'https://www.figma.com/file/jfFkx2qL8YAwGaxIj8Z7GK/image/054dca4a21ae14f00a66fd13c10370475012dd0b',
    },
  ]

  // useEffect(() => {
  //   reviewsRequest()
  // }, [reviewsRequest])

  const swiperSettings = {
    slidesPerView: 3,
    initialSlide: 1,
    centeredSlides: true,
    loop: true,
    navigation: false,
    spaceBetween: 13,
  }

  if (!reviewsData.length) {
    return null
  }

  return (
    <MultiContainer>
      <secton id='reviews'>
        <Heading text={'Отзывы'} />
        <Swiper className={stylesCard.customSlider} {...swiperSettings}>
          {reviewsData.map((item, index) => (
            <SwiperSlide key={index} className={stylesCard.slide}>
              <ReviewCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </secton>
    </MultiContainer>
  )
}
