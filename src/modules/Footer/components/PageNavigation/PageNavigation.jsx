import { Link } from 'react-router-dom'
import styles from './PageNavigation.module.scss'

export const PageNavigation = () => {
  return (
    <div className={styles.links}>
      <Link to={'/'}>Туры</Link>
      <Link to={'/'}>Визы</Link>
      <Link to={'/'}>Доставка</Link>
    </div>
  )
}
