import styles from './VisaSupport.module.scss';
import { Heading } from '@/ui/Heading/Heading';
import { Slider } from '@/ui/Slider/Slider';
import { VisaCard } from '../VisaSupport/ui/VisaCard/VisaCard';
import { useEffect } from 'react';
import { VisaSupportApi } from './api/VisaSupportApi';
import globe from '../../../app/assets/images/visaSupBg.png';

export const VisaSupport = () => {
  const { visaData, visaRequest } = VisaSupportApi();

  useEffect(() => {
    visaRequest();
  }, [visaRequest]);

  if (!visaData.length) {
    return null;
  }

  return (
    <div className={styles.visa}>
      <div className={styles.background}>
          <div className={styles.globe}>
            <img src={globe} alt="globe" />
          </div>
          {/* <div className={styles.left}>
            <img src="" alt="left elem" />
          </div>
          <div className={styles.center}>
            <img src="" alt="center elem" />
          </div>
          <div className={styles.right}>
            <img src="" alt="right elem" />
          </div> */}
        </div>
      <Heading text='Визовая поддержка - Visa Go' />
      <div className={styles.cards}>
        <Slider
          data={visaData}
          slidesPerView={4}
          renderItem={(item) => <VisaCard item={item} />}
          loop={true}
        />
      </div>
    </div>
  );
};
