import styles from './Header.module.scss'
// import logo from ''
import { Link } from 'react-router-dom'
import logo from '@/app/assets/icons/logo.svg'
import whatsapp from '@/app/assets/icons/whatsapp_header_icon.svg'
import location from '@/app/assets/icons/location_icon.svg'
import { Typography } from '@/ui/Typography/Typography'

export const Header = () => {
  return (
    <header className={styles.navbar}>
      <section className={styles.contactsSection}>
        <div className={styles.phoneBlock}>
          <img src={whatsapp} alt='icon' />
          <Typography
            variant='a'
            href='https://wa.me/1234567890'
            target='_blank'
          >
            +996(700)777 777
          </Typography>
        </div>
        <div className={styles.phoneBlock}>
          <img src={location} alt='icon' />
          <Typography
            variant='a'
            href='https://2gis.kg/bishkek/firm/70000001044298822/tab/services?m=74.613883%2C42.826555%2F16%2Fp%2F0.94%2Fr%2F-0.19'
            target='_blank'
          >
            ул. Жукеева - Пудовкина 44/1
          </Typography>
        </div>
      </section>
      <section className={styles.centerSection}>
        <div className={styles.logo}>
          <Link to={'/'} target='_top'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className={styles.navigationList}>
          <Link to={'/tours'}>Туры</Link>
          <Link to={'*'}>О нас</Link>
          <Link to={'/visa-support'}>Визы</Link>
          <Link to={'/delivery'}>Доставка товаров</Link>
          <Link to={'*'}>Отзывы</Link>
        </div>
      </section>
      <Typography variant='button' className={styles.formBtn}>
        Задать вопрос
      </Typography>
    </header>
  )
}
