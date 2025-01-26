import { Typography } from '@/ui/Typography/Typography'
import styles from './InfoFrame.module.scss'

export const InfoFrame = ({ moreInfo }) => {
  return (
    <section key={moreInfo.id}>
      <div>
        <img src={moreInfo.image} alt='bg image' />
      </div>
      <div>
        <Typography variant='fs20' useParser={true}>
          {moreInfo.description}
        </Typography>
        {/* <Typography>{moreInfo.}</Typography> */}
      </div>
    </section>
  )
}
