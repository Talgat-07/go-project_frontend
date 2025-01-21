import { useEffect } from 'react'
import { ReviewsApi } from './api/ReviewsApi'
import styles from './Reviews.module.scss'
import { MdPlayArrow } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Typography } from '@/ui/Typography/Typography'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { LeftArrow } from '@/ui/ReviewsArrows/LocalArrows/LeftArrow/LeftArrow'
import { RightArrow } from '@/ui/ReviewsArrows/LocalArrows/RightArrow/RightArrow'

export const Reviews = () => {
  const { reviewsData, reviewsRequest } = ReviewsApi()

  useEffect(() => {
    reviewsRequest()
  }, [reviewsRequest])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
    focusOnSelect: true,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 936,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 616,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <Typography variant='h2' className={styles.reviewTitle}>
        Отзывы
      </Typography>
      <Slider {...settings} className={styles.slider}>
        {reviewsData.map((item) => (
          <article className={styles.reviewFrame}>
            <div className={styles.info}>
              <Typography variant='h3' className={styles.title}>
                {item.title}
              </Typography>
              <Typography variant='p' className={styles.description}>
                {item.text}
              </Typography>
            </div>
            <div className={styles.imgBlock}>
              <Link to={item.video} target='_blank'>
                <div className={styles.img}>
                  <img src={item.photo} alt='image' />
                </div>
                <div className={styles.playBtn}>
                  <MdPlayArrow color='#FF6600' size={75} />
                </div>
              </Link>
            </div>
          </article>
        ))}
      </Slider>
    </>
  )
}
