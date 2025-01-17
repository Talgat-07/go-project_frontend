import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import styles from './ToursSlider.module.scss'
import { Typography } from '@/ui/Typography/Typography'
import { ToursSliderApi } from './api/ToursSliderApi'
import { useEffect } from 'react'
import { DateProp } from './component/DateProp'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'
import { LeftArrow } from '@/modules/SliderArrows/LeftArrow/LeftArrow'
import { RightArrow } from '@/modules/SliderArrows/RightArrow/RightArrow'
import { Link } from 'react-router-dom'

export const ToursSlider = () => {
  const { toursData, toursRequest } = ToursSliderApi()

  useEffect(() => {
    toursRequest()
  }, [toursRequest])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
    focusOnSelect: true,
    swipeToSlide: true,
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

  const translateColor = (color) => {
    const colorMap = {
      Оранжевый:
        'linear-gradient(160deg,rgba(189, 99, 46, 0.86),rgba(0, 0, 0, 0.86))',
      Черный: 'linear-gradient(160deg,rgba(32, 49, 82, 1),rgba(0, 0, 0, 0.86))',
      Берёзовый:
        'linear-gradient(160deg,rgba(41, 218, 203, 0.86),rgba(0, 0, 0, 0.86))',
    }
    // Fallback to the original color if no translation
    return colorMap[color]
  }

  return (
    <section className={styles.toursSection}>
      <Typography variant='h2' className={styles.title}>
        Туры
      </Typography>
      <Typography variant='p'>
        <Link to={'/tours'} className={styles.switchText}>
          Все туры 🡢
        </Link>
      </Typography>
      <Slider {...settings} className={styles.slider}>
        {toursData.map((item) => (
          <article className={styles.slide} key={item.id}>
            <div className={styles.slideBg}>
              <img src={item.image} alt='background image' />
            </div>
            <div
              className={styles.tourInfo}
              style={{ background: translateColor(item.background_color) }}
            >
              <Typography variant='h3' className={styles.tourTitle}>
                {item.description}
              </Typography>
              <DateProp dateProp={item} />
            </div>
            <SwitchButton
              maxWidth='165px'
              padding='5px 20px'
              variant='animation_1'
              className={styles.switchBtn}
            >
              Подробнее
            </SwitchButton>
          </article>
        ))}
      </Slider>
    </section>
  )
}
