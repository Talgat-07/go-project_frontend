import styles from './Header.module.scss'
// import logo from ''
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* <img src={logo} alt='logo' /> */}
        <Link to={'/'}>logo</Link>
      </div>
      <ul className={styles.navigationList}>
        <li>Каталог туров</li>
        <li>Визовая поддержка</li>
        <li>Отзывы клиентов</li>
        <li>Доставка товаров из Китая EasyGo</li>
        <Link to={'/another-page'}>О компании</Link>
      </ul>
    </nav>
  )
}
