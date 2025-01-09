import styles from './PagesHeader.module.scss'
import { Link } from 'react-router-dom'
import logo from '@/app/assets/icons/logo.svg'
import { Typography } from '@/ui/Typography/Typography'
import { FaWhatsapp } from 'react-icons/fa'
import { SlLocationPin } from 'react-icons/sl'

export const PagesHeader = () => {
  return (
    <header className={styles.navbar}>
      <section className={styles.contactsSection}>
        <div className={styles.phoneBlock}>
          <FaWhatsapp style={{ color: '#000' }} size={'24px'} />
          <Typography variant='a' href='tel:+9960706789678'>
            +996(700)777 777
          </Typography>
        </div>
        <div className={styles.phoneBlock}>
          <SlLocationPin style={{ color: '#000' }} size={'24px'} />
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
