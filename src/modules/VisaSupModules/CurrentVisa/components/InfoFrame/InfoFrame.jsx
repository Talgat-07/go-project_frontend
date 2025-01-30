import { Typography } from '@/ui'
import styles from './InfoFrame.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export const InfoFrame = ({ moreInfo }) => {
  useEffect(() => {
    const articles = document.querySelectorAll(`.${styles.infoBlocks}`)

    articles.forEach((article, index) => {
      gsap.fromTo(
        article,
        { x: index % 2 === 0 ? '14%' : '-40%', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          // animation delay
          delay: index * 0.2,
          scrollTrigger: {
            trigger: article,
            start: 'top 80%',
            end: 'bottom 90%',
            scrub: 2.5,
          },
        },
      )
    })
  }, [moreInfo])

  return (
    <section className={styles.infoSection}>
      {moreInfo.images.slice(0, 1).map((item) => (
        <article key={item.id} className={styles.infoBlocks}>
          <div className={styles.img}>
            <img src={item.image} loading='lazy' alt='bg image' />
          </div>
          <div>
            <Typography
              variant='fs20'
              useParser={true}
              className={styles.description}
            >
              {item.description}
            </Typography>
          </div>
        </article>
      ))}
      {moreInfo.images.slice(1, 2).map((item) => (
        <article key={item.id} className={styles.infoBlocks}>
          <div>
            <Typography
              variant='fs20'
              useParser={true}
              className={styles.description}
            >
              {item.description}
            </Typography>
          </div>
          <div className={styles.img}>
            <img src={item.image} alt='bg image' />
          </div>
        </article>
      ))}
      {moreInfo.images.slice(0, 1).map((item) => (
        <article key={item.id} className={styles.infoBlocks}>
          <div className={styles.img}>
            <img src={item.image} alt='bg image' />
          </div>
          <div>
            <Typography
              variant='fs20'
              useParser={true}
              className={styles.description}
            >
              {item.description}
            </Typography>
          </div>
        </article>
      ))}
    </section>
  )
}
