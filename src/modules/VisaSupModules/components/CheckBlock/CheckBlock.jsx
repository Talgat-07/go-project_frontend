import { Typography } from '@/ui'
import styles from './CheckBlock.module.scss'
import { World } from '@/app/assets/icons/worldMapPlaneDesign/World'
import { TopLine } from '@/app/assets/icons/worldMapPlaneDesign/TopLine'
import { LeftLine } from '@/app/assets/icons/worldMapPlaneDesign/LeftLine'
import { RightLine } from '@/app/assets/icons/worldMapPlaneDesign/RightLine'
import { RightPlane } from '@/app/assets/icons/worldMapPlaneDesign/RightPlane'
import { LeftPlane } from '@/app/assets/icons/worldMapPlaneDesign/LeftPlane'
import { gsap } from 'gsap'
import { useEffect } from 'react'
import { Description } from './ui/Descriprion'
import { useTranslation } from 'react-i18next'

export const CheckBlock = ({ mainContent }) => {
  const { t } = useTranslation()

  useEffect(() => {
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
          {t("visaPage.expertHelp")}
        </Typography>
        <Description desc={mainContent} />
      </section>
    </main>
  )
}
