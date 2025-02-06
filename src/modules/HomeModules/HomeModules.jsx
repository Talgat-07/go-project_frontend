import { Banner } from '@/modules/HomeModules/components';
import { AboutUs } from '@/modules/HomeModules/components';
import { Delivery } from '@/modules/HomeModules/components';
import { Partners } from '@/modules/HomeModules/components';
import { ToursSlider } from '@/modules/HomeModules/components';
import { Reviews } from '@/modules/HomeModules/components';
import { VisaSupport } from '@/modules/HomeModules/components/VisaSupport/VisaSupport';
import styles from './HomeModules.module.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HomeModules = () => {
  const sections = useRef([]);

  // useEffect(() => {
  //   gsap.fromTo(
  //     `.toursSlider`,
  //     { opacity: 0, y: 50 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       delay: 1.5,
  //       scrollTrigger: {
  //         trigger: `.toursSlider`,
  //         start: 'top 72%',
  //         end: 'bottom 90%',
  //         scrub: 2.5,
  //         once: true,
  //       },
  //     },
  //   );

  //   gsap.fromTo(
  //     `.aboutUs`,
  //     { opacity: 0, x: -50 },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       duration: 1,
  //       delay: 0.5,
  //       scrollTrigger: {
  //         trigger: `.aboutUs`,
  //         start: 'top 2%',
  //         end: 'bottom 90%',
  //         scrub: 2.5,
  //         once: true,
  //       },
  //     },
  //   );

  //   gsap.fromTo(
  //     `.visaSupport`,
  //     { opacity: 0, scale: 0.8 },
  //     {
  //       opacity: 1,
  //       scale: 1,
  //       duration: 1,
  //       delay: 4.5,
  //       scrollTrigger: {
  //         trigger: `.visaSupport`,
  //         start: 'top -80%',
  //         end: 'bottom 9%',
  //         scrub: 2.5,
  //         once: true,
  //       },
  //     },
  //   );

  //   gsap.fromTo(
  //     `.delivery`,
  //     { opacity: 0, y: 160 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       delay: 4,
  //       scrollTrigger: {
  //         trigger: `.delivery`,
  //         start: 'top -113%',
  //         end: 'bottom 90%',
  //         scrub: 2.5,
  //         once: true,
  //       },
  //     },
  //   );

  //   gsap.fromTo(
  //     `.reviews`,
  //     { opacity: 0, x: -100 },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       duration: 1,
  //       delay: 1.5,
  //       scrollTrigger: {
  //         trigger: `.reviews`,
  //         start: 'top -203%',
  //         end: 'bottom -90%',
  //         scrub: 2.5,
  //         once: true,
  //       },
  //     },
  //   );

  //   gsap.fromTo(
  //     `.partners`,
  //     { opacity: 0, y: 100 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       delay: 0.5,
  //       scrollTrigger: {
  //         trigger: `.partners`,
  //         start: 'top -240%',
  //         end: 'bottom -90%',
  //         scrub: 2.5,
  //         once: true,
  //       },
  //     },
  //   );
  // }, []);

  return (
    <main className={styles.main}>
      <div className={styles.yellowCircle}>&nbsp;</div>
      <div className={styles.orangeCircle}>&nbsp;</div>
      <Banner />
      <section ref={(e) => (sections.current[0] = e)} className='toursSlider'>
        <ToursSlider />
      </section>
      <section ref={(e) => (sections.current[1] = e)} className='aboutUs'>
        <AboutUs />
      </section>
      <section ref={(e) => (sections.current[2] = e)} className='visaSupport'>
        <VisaSupport />
      </section>
      <section ref={(e) => (sections.current[3] = e)} className='delivery'>
        <Delivery />
      </section>
      <section ref={(e) => (sections.current[4] = e)} className='reviews'>
        <Reviews />
      </section>
      <section ref={(e) => (sections.current[5] = e)} className='partners'>
        <Partners />
      </section>
    </main>
  );
};
