import { Typography } from '@/ui';
import styles from './Info.module.scss';
import { Heading } from '@/ui';
import { MultiContainer } from '@/ui';

export const Info = ({ info }) => {
  return (
    <MultiContainer>
      <div className={styles.main} id='about-us'>
        <Heading text={info.title} />
        <div className={styles.content}>
          <div className={styles.img}>
            <img src={info.image} alt='info image' />
          </div>
          <Typography useParser variant='fs24' className={styles.description}>
            {info.description}
          </Typography>
        </div>
      </div>
    </MultiContainer>
  )
}
