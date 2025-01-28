import { Typography } from '@/ui/Typography/Typography'
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
          // Задержка между анимациями
          delay: index * 0.3,
          scrollTrigger: {
            trigger: article,
            start: 'top 90%',
            end: 'bottom 50%',
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
            {/* <Typography>{moreInfo.}</Typography> */}
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
            {/* <Typography>{moreInfo.}</Typography> */}
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
            {/* <Typography>{moreInfo.}</Typography> */}
          </div>
        </article>
      ))}
    </section>
  )
}
