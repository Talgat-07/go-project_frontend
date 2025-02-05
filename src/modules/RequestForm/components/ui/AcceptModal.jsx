import { useEffect, useRef, useState } from 'react';
import styles from './AcceptModal.module.scss';
import { RxCross2 } from 'react-icons/rx';
import { Typography } from '@/ui';
import { FirstAn } from '@/app/assets/icons/succesLoader/FirstAn';
import { SecondAn } from '@/app/assets/icons/succesLoader/SecondAn';
import { ThirtyAn } from '@/app/assets/icons/succesLoader/ThirtyAn';
import { FourAn } from '@/app/assets/icons/succesLoader/FourAn';
import { FiveAn } from '@/app/assets/icons/succesLoader/FiveAn';
import { SixAn } from '@/app/assets/icons/succesLoader/SixAn';
import { SevenAn } from '@/app/assets/icons/succesLoader/SevenAn';
import gsap from 'gsap';

export const AcceptModal = () => {
  const [acceptModal, setAcceptModal] = useState(true);

  const closeAcceptModal = () => setAcceptModal(false);

  const loaderRefs = useRef([]);

  useEffect(() => {
    if (loaderRefs.current.length) {
      const duration = 0.4;
      const staggerDelay = 0.04;

      gsap.fromTo(
        loaderRefs.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: duration,
          stagger: staggerDelay,
          ease: 'elastic.out',
        },
      );
    }
  }, []);

  return (
    <>
      {acceptModal && (
        <section className={styles.acceptModalBg}>
          <div className={styles.acceptModal}>
            <RxCross2
              color='#FF6600'
              size={25}
              onClick={closeAcceptModal}
              className={styles.acceptCross}
            />
            <div className={styles.loaderContainer}>
              <div
                ref={(el) => (loaderRefs.current[0] = el)}
                className={styles.loader}
              >
                <FirstAn />
              </div>
              <div
                ref={(el) => (loaderRefs.current[1] = el)}
                className={styles.loader}
              >
                <SecondAn />
              </div>
              <div
                ref={(el) => (loaderRefs.current[2] = el)}
                className={styles.loader}
              >
                <ThirtyAn />
              </div>
              <div
                ref={(el) => (loaderRefs.current[3] = el)}
                className={styles.loader}
              >
                <FourAn />
              </div>
              <div
                ref={(el) => (loaderRefs.current[4] = el)}
                className={styles.loader}
              >
                <FiveAn />
              </div>
              <div
                ref={(el) => (loaderRefs.current[5] = el)}
                className={styles.loader}
              >
                <SixAn />
              </div>
              <div
                ref={(el) => (loaderRefs.current[6] = el)}
                className={styles.loader}
              >
                <SevenAn />
              </div>
            </div>
            <Typography variant='fs24' className={styles.acceptTitle}>
              Успешно отправлено
            </Typography>
          </div>
        </section>
      )}
    </>
  );
};
