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
      {moreInfo.map((item, index) => (
        <article key={item.id} className={`${styles.infoBlocks} ${index % 2 !== 0 ? styles.flexReverse : ''}`}>
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
    </section>
  )
}
