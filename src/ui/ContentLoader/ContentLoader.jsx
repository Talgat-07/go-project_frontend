import { MultiContainer } from '../Multicontainer/Multicontainer'
import { PulseLoader } from 'react-spinners'
import styles from './Loader.module.scss'

export const ContentLoader = () => {
  return (
    <MultiContainer className={styles.loaderContainer}>
      <PulseLoader
        color='#FF6600'
        size={25}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </MultiContainer>
  )
}
