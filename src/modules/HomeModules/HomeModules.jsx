import { Banner } from '@/modules/HomeModules/components'
import { AboutUs } from '@/modules/HomeModules/components'
import { Delivery } from '@/modules/HomeModules/components'
import { Partners } from '@/modules/HomeModules/components'
import { ToursSlider } from '@/modules/HomeModules/components'
import { Reviews } from '@/modules/HomeModules/components'
import styles from './HomeModules.module.scss'
import { VisaSupport } from '@/modules/HomeModules/components/VisaSupport/VisaSupport'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HomeModules = () => {
  const sections = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      `.toursSlider`,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: `.toursSlider`,
          start: 'top 70%',
          end: 'bottom 90%',
          scrub: 2.5,
          once: true,
        },
      },
    );

    gsap.fromTo(
      `.aboutUs`,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.8,
        scrollTrigger: {
          trigger: `.aboutUs`,
          start: 'top 5%',
          end: 'bottom 90%',
          scrub: 2.5,
          once: true,
        },
      },
    );

    gsap.fromTo(
      `.visaSupport`,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.6,
        scrollTrigger: {
          trigger: `.visaSupport`,
          start: 'top -65%',
          end: 'bottom 9%',
          scrub: 2.5,
          once: true,
        },
      },
    );

    gsap.fromTo(
      `.delivery`,
      { opacity: 0, y: 160 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8,
        scrollTrigger: {
          trigger: `.delivery`,
          start: 'top -79%',
          end: 'bottom 90%',
          scrub: 2.5,
          once: true,
        },
      },
    );

    gsap.fromTo(
      `.reviews`,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 3.5,
        scrollTrigger: {
          trigger: `.reviews`,
          start: 'top -173%',
          end: 'bottom -90%',
          scrub: 2.5,
          once: true,
        },
      },
    );

    gsap.fromTo(
      `.partners`,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: `.partners`,
          start: 'top -198%',
          end: 'bottom -130%',
          scrub: 2.5,
          once: true,
        },
      },
    );
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.yellowCircle}>&nbsp;</div>
      <div className={styles.orangeCircle}>&nbsp;</div>
      <Banner />
      <section ref={(el) => (sections.current[0] = el)} className='toursSlider'>
        <ToursSlider />
      </section>
      <section ref={(el) => (sections.current[1] = el)} className='aboutUs'>
        <AboutUs />
      </section>
      <section ref={(el) => (sections.current[2] = el)} className='visaSupport'>
        <VisaSupport />
      </section>
      <section ref={(el) => (sections.current[3] = el)} className='delivery'>
        <Delivery />
      </section>
      <section ref={(el) => (sections.current[4] = el)} className='reviews'>
        <Reviews />
      </section>
      <section ref={(el) => (sections.current[5] = el)} className='partners'>
        <Partners />
      </section>
    </main>
  );
};

