import React from 'react';
import { Typography } from '@/ui';
import styles from './Hero.module.scss';

export const Hero = ({ item }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImg}>
        <img src={item?.image} alt={item?.title} />
        <div className={styles.overlay} />
      </div>
      <div className={styles.heroText}>
        <Typography variant="h1">{item?.title}</Typography>
        <Typography>{item?.description}</Typography>
      </div>
    </div>
  );
};
