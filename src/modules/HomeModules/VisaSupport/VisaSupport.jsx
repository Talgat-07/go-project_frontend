import { Typography } from '@/ui/Typography/Typography'
import styles from './VisaSupport.module.scss'
import { useEffect } from 'react'
import { useVisaSupport } from './api/VisaSupportApi'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { LeftArrow } from '@/ui/SliderArrows/LeftArrow/LeftArrow'
import { RightArrow } from '@/ui/SliderArrows/RightArrow/RightArrow'

export const VisaSupport = () => {
  const { visaData, visaRequest } = useVisaSupport()

  useEffect(() => {
    visaRequest()
  }, [visaRequest])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 750,
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

  return (
    <>
      <Typography variant='h2' className={styles.title}>
        Визовая поддержка- Visa Go
      </Typography>
      <Slider {...settings} className={styles.slider}>
        {visaData.map((item) => (
          <article className={styles.visaSupSection} key={item.id}>
            <div className={styles.visaContentContainer}>
              <div className={styles.countryIcon}>
                <img src={item.icon} alt='country image' />
              </div>
              <div className={styles.infoFrame}>
                <Typography variant='h2' className={styles.title}>
                  {item.title}
                </Typography>
                <Typography variant='з' className={styles.description}>
                  {item.description}
                </Typography>
              </div>
            </div>
          </article>
        ))}
      </Slider>
    </>
  )
}
