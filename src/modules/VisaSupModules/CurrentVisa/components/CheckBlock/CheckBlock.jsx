import { Typography } from '@/ui/Typography/Typography'
import styles from './CheckBlock.module.scss'
import { BiSolidCheckCircle } from 'react-icons/bi'
import { World } from '@/app/assets/icons/worldMapPlaneDesign/World'
import { TopLine } from '@/app/assets/icons/worldMapPlaneDesign/TopLine'
import { LeftLine } from '@/app/assets/icons/worldMapPlaneDesign/LeftLine'
import { RightLine } from '@/app/assets/icons/worldMapPlaneDesign/RightLine'
import { RightPlane } from '@/app/assets/icons/worldMapPlaneDesign/RightPlane'
import { LeftPlane } from '@/app/assets/icons/worldMapPlaneDesign/LeftPlane'
import { gsap } from 'gsap'
import { useEffect } from 'react'

export const CheckBlock = () => {
  const data = [
    {
      id: 1,
      title: 'Консультирование по выбору визы и требованиям для ее получения',
    },
    {
      id: 2,
      title: 'Консультирование по выбору визы и требованиям для ее получения',
    },
    {
      id: 3,
      title: 'Консультирование по выбору визы и требованиям для ее получения',
    },
    {
      id: 4,
      title: 'Консультирование по выбору визы и требованиям для ее получения',
    },
  ]

  useEffect(() => {
    // parallax animation
    gsap.fromTo(
      `.${styles.world}`,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 },
    )
    gsap.fromTo(
      `.${styles.leftPlane}`,
      { opacity: 0, x: -60, y: 100 },
      { opacity: 1, x: 0, duration: 1, y: 0 },
    )

    gsap.fromTo(
      `.${styles.leftLine}`,
      { opacity: 0, x: -60, y: 100 },
      { opacity: 1, x: 0, duration: 1, y: 0 },
    )
    gsap.fromTo(
      `.${styles.topLine}`,
      { opacity: 0, y: 150, rotation: -15, x: -150 },
      { opacity: 1, y: 0, duration: 1, rotation: 9, x: 0 },
    )
    gsap.fromTo(
      `.${styles.rightLine}`,
      { opacity: 0, x: 60, y: 100 },
      { opacity: 1, x: 0, duration: 1, y: 0 },
    )
    gsap.fromTo(
      `.${styles.rightPlane}`,
      { opacity: 0, x: 60, y: 100 },
      { opacity: 1, x: 0, duration: 1, y: 0 },
    )
    gsap.fromTo(
      `.${styles.orangeIcon}`,
      { opacity: 0 },
      { opacity: 1, duration: 2 },
    )
  }, [])

  return (
    <main className={styles.checkBlock}>
      <section className={styles.parallaxSection}>
        <LeftPlane className={styles.leftPlane} />
        <World width='660' height='267' className={styles.world} />
        <LeftLine className={styles.leftLine} />
        <TopLine className={styles.topLine} />
        <RightLine className={styles.rightLine} />
        <RightPlane className={styles.rightPlane} />
      </section>
      <section className={styles.checkSection}>
        <Typography variant='h5' className={styles.title}>
          Наша экспертная помощь
        </Typography>
        <div className={styles.checkFrameContainer}>
          {data.map((item) => (
            <div className={styles.checkFrame} key={item.id}>
              <BiSolidCheckCircle
                className={styles.orangeIcon}
                color='#FF6600'
                size={50}
              />
              <Typography variant='fs24' useParser={true}>
                {item.title}
              </Typography>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
