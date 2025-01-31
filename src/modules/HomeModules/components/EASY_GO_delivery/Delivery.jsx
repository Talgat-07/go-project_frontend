import { Typography } from '@/ui';
import styles from './Delivery.module.scss';
import { useEG_Delicery } from '../../api/HomePageDeliveryApi';
import { useEffect } from 'react';
import { SwitchButton } from '@/ui';
import { Heading } from '@/ui';

export const Delivery = () => {
  const { deliveryData, deliveryRequest } = useEG_Delicery();

  useEffect(() => {
    deliveryRequest();
  }, [deliveryRequest]);

  if (!deliveryData.length) {
    return null;
  }

  return (
    <section className={styles.deliverySection}>
      <Heading text="Доставка Easy Go" />
      {deliveryData.map((item) => (
        <div className={styles.deliveryBanner} key={item.id}>
          <div className={styles.img}>
            <img src={item.image} alt='background image' />
            <div className={styles.overlay} />
          </div>
          <div className={styles.frame}>
            <Typography variant='h2' weight='fw5' className={styles.title}>
              {item.title}
            </Typography>
            <Typography variant='h3' weight='fw4' className={styles.desc}>
              {item.description}
            </Typography>
            <SwitchButton
              maxWidth='195px'
            >
              Подробнее
            </SwitchButton>
          </div>
        </div>
      ))}
    </section>
  );
};
