import React, { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './Slider.module.scss'
import { SliderLeft } from '@/app/assets/icons/SliderLeft'
import { SliderRight } from '@/app/assets/icons/SliderRight'
import { MultiContainer } from '../Multicontainer/Multicontainer'

export const Slider = (props) => {
  const {
    data = [],
    loop = false,
    renderItem,
    className,
    centeredSlides = false,
    slidesPerView = 3,
    spaceBetween = 20,
  } = props

  const swiperRef = useRef(null)

  const isLoopEnabled = loop && data.length > slidesPerView // Disable loop if slides are fewer than slidesPerView
  const isCenteredEnabled = centeredSlides && data.length > slidesPerView // Disable centered slides in the same case
  const areButtonsDisabled = data.length <= slidesPerView

  const swiperSettings = {
    slidesPerView,
    spaceBetween,
    initialSlide: 1,
    centeredSlides: isCenteredEnabled,
    loop: isLoopEnabled,
    navigation: false,
  }

  const handlePrevClick = () => {
    if (swiperRef.current) swiperRef.current.slidePrev()
  }

  const handleNextClick = () => {
    if (swiperRef.current) swiperRef.current.slideNext()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      handlePrevClick()
    } else if (event.key === 'ArrowRight') {
      handleNextClick()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  if (!data || data.length === 0) {
    return <div>No items to display</div>
  }

  return (
    <MultiContainer>
      <div className={styles.sliderContainer}>
        {!isCenteredEnabled && (
          <div className={styles.buttons}>
            <button disabled={areButtonsDisabled} className={styles.prevButton} onClick={handlePrevClick}>
              <SliderLeft color={areButtonsDisabled ? "#FFCDA5" : "#FF6600"} />
            </button>
            <button disabled={areButtonsDisabled} className={styles.nextButton} onClick={handleNextClick}>
              <SliderRight color={areButtonsDisabled ? "#FFCDA5" : "#FF6600"}/>
            </button>
          </div>
        )}
        <Swiper
          className={className}
          {...swiperSettings}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              {renderItem && renderItem(item)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </MultiContainer>
  )
}
