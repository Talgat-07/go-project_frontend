import { Typography } from '@/ui';
import styles from './Desc.module.scss';
import { BiSolidCheckCircle } from 'react-icons/bi';

export const Description = ({ desc }) => {
  return (
    <div className={styles.checkFrameContainer}>
      {desc.map((data) => (
        <>
          <div className={styles.checkFrame}>
            <BiSolidCheckCircle
              className={styles.orangeIcon}
              color='#FF6600'
              size={50}
            />
            <Typography
              variant='fs24'
              useParser={true}
              className={styles.description}
            >
              {data.description_1}
            </Typography>
          </div>
          <div className={styles.checkFrame}>
            <BiSolidCheckCircle
              className={styles.orangeIcon}
              color='#FF6600'
              size={50}
            />
            <Typography
              variant='fs24'
              useParser={true}
              className={styles.description}
            >
              {data.description_2}
            </Typography>
          </div>
          <div className={styles.checkFrame}>
            <BiSolidCheckCircle
              className={styles.orangeIcon}
              color='#FF6600'
              size={50}
            />
            <Typography
              variant='fs24'
              useParser={true}
              className={styles.description}
            >
              {data.description_3}
            </Typography>
          </div>
          <div className={styles.checkFrame}>
            <BiSolidCheckCircle
              className={styles.orangeIcon}
              color='#FF6600'
              size={50}
            />
            <Typography
              variant='fs24'
              useParser={true}
              className={styles.description}
            >
              {data.description_4}
            </Typography>
          </div>
        </>
      ))}
    </div>
  );
};
