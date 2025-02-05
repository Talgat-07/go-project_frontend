import React from 'react';
import { Typography } from '@/ui';
import styles from './Hero.module.scss';

export const Hero = ({ item, title }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImg}>
        <img src={item?.image} alt={title} />
        <div className={styles.overlay} />
      </div>
      <div className={styles.heroText}>
        <Typography variant="h1">{title}</Typography>
        <Typography>{item?.description}</Typography>
      </div>
    </div>
  );
};
