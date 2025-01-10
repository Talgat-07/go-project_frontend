import styles from './Footer.module.scss'
import logo from '@/app/assets/icons/logo.svg'
import QR from '@/app/assets/icons/inst_QR.svg'
import icon_1 from '@/app/assets/icons/whapp_icon.svg'
import icon_2 from '@/app/assets/icons/tg_icon.svg'
import icon_3 from '@/app/assets/icons/tt_icon.svg'
import { Typography } from '@/ui/Typography/Typography'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const icons = [icon_1, icon_2, icon_3]

  return (
    <footer className={styles.footer}>
      <main className={styles.mainSection}>
        <section className={styles.routesSection}>
          <div>
            <Link to={'/'} target='_top'>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <aside className={styles.navigation}>
            <div className={styles.links}>
              <Link to={'/'}>Туры</Link>
              <Link to={'/'}>Визы</Link>
              <Link to={'/'}>Доставка</Link>
            </div>
            <div className={styles.links}>
              <Typography variant='a' href='mailto:goprogect@gmail.com'>
                E-mail : goprogect@gmail.com
              </Typography>
              <Typography
                variant='a'
                href='https://2gis.kg/bishkek/firm/70000001044298822/tab/services?m=74.613883%2C42.826555%2F16%2Fp%2F0.94%2Fr%2F-0.19'
                target='_blank'
              >
                Адрес : ул. Жукеева - Пудовкина 44/1
              </Typography>
              <Typography variant='a' href='tel:+9960706789678'>
                Телефон : 0706 789 678
              </Typography>
            </div>
          </aside>
          <div className={styles.qrBlock}>
            <div>
              <img src={QR} alt='qr code' />
            </div>
            <div className={styles.iconsContainer}>
              {icons.map((item, id) => (
                <img src={item} alt='icon' key={id} />
              ))}
            </div>
          </div>
        </section>
        <Typography variant='p' className={styles.template}>
          Geeks Pro 7.0 2024 BRIX Templates
        </Typography>
      </main>
    </footer>
  )
}
