import Slider from 'react-slick'
import styles from './ToursSlider.module.scss'
import 'slick-carousel/slick/slick.css'
import { Typography } from '@/ui/Typography/Typography'

export const ToursSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 936,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 616,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section className={styles.toursSection}>
      <Typography variant='h2' className={styles.title}>
        Туры
      </Typography>
      <Slider {...settings} className={styles.slider}>
        <div className={styles.slide}>
          <h3>1</h3>
        </div>
        <div className={styles.slide}>
          <h3>2</h3>
        </div>
        <div className={styles.slide}>
          <h3>3</h3>
        </div>
        <div className={styles.slide}>
          <h3>4</h3>
        </div>
        <div className={styles.slide}>
          <h3>5</h3>
        </div>
      </Slider>
    </section>
  )
}
