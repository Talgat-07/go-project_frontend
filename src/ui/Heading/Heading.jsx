import { Typography } from '../Typography/Typography';
import styles from './Heading.module.scss';

export const Heading = ({ text, className }) => {
  return (
    <div className={`${styles.heading} ${className}`}>
      <Typography
        weight="fw5"
        variant="h1"
        color="#FF6600"
      >
        {text}
      </Typography>
    </div>
  );
};

