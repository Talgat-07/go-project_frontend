import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

export const HomeNavigation = ({ color, textShadow }) => {
  return (
    <div className={styles.navigationList_home}>
      <Link to={'/tours'} style={{ color: color, textShadow: textShadow }}>
        Туры
      </Link>
      <Link to={'*'} style={{ color: color, textShadow: textShadow }}>
        О нас
      </Link>
      <Link
        to={'/visa-support'}
        style={{ color: color, textShadow: textShadow }}
      >
        Визы
      </Link>
      <Link to={'/delivery'} style={{ color: color, textShadow: textShadow }}>
        Доставка товаров
      </Link>
      <Link to={'*'} style={{ color: color, textShadow: textShadow }}>
        Отзывы
      </Link>
    </div>
  )
}

export const PagesNavigation = () => {
  return (
    <div className={styles.navigationList_pages}>
      <Link to={'/tours'}>Туры</Link>
      <Link to={'*'}>О нас</Link>
      <Link to={'/visa-support'}>Визы</Link>
      <Link to={'/delivery'}>Доставка товаров</Link>
      <Link to={'*'}>Отзывы</Link>
    </div>
  )
}
