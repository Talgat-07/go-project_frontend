import { MultiContainer } from '@/ui/Multicontainer/Multicontainer';
import styles from './CostBlock.module.scss';
import { CloudIcon } from '@/app/assets/icons/CloudIcon';
import { Typography } from '..';

export const CostBlock = ({ processAndCost }) => {
  console.log(processAndCost);

  return (
    <MultiContainer>
      <section className={styles.costProcSection}>
        <div className={styles.yellowCircle}>&nbsp;</div>
        <CloudIcon className={styles.cloud} />
        <CloudIcon className={styles.secondCloud} />
        <div className={styles.content}>
          <Typography useParser variant='fs24'>
            {processAndCost}
          </Typography>
        </div>
      </section>
    </MultiContainer>
  );
};
