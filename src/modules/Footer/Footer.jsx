import styles from './Footer.module.scss'
import logo from '@/app/assets/icons/logo.svg'
import QR from '@/app/assets/icons/inst_QR.svg'
import icon_1 from '@/app/assets/icons/whapp_icon.svg'
import icon_2 from '@/app/assets/icons/tg_icon.svg'
import icon_3 from '@/app/assets/icons/tt_icon.svg'
import { Typography } from '@/ui/Typography/Typography'
import { Link } from 'react-router-dom'
import { ContactsStorage } from '@/app/Storage/Storage'
import { useEffect } from 'react'

export const Footer = () => {
  const { contactsData, contactsRequest, smData, smRequest } = ContactsStorage()

  useEffect(() => {
    contactsRequest(), smRequest()
  }, [contactsRequest, smRequest])

  return (
    <footer className={styles.footer}>
      <main className={styles.mainSection}>
        <section className={styles.routesSection}>
          <div>
            <Link to={'/'} target='_top'>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <section className={styles.navigation}>
            <div className={styles.links}>
              <Link to={'/'}>Туры</Link>
              <Link to={'/'}>Визы</Link>
              <Link to={'/'}>Доставка</Link>
            </div>
            {contactsData.map((item) => (
              <article className={styles.links} key={item.id}>
                <Typography variant='a' href={`mailto:${item.email}`}>
                  {item.email}
                </Typography>
                <Typography
                  variant='a'
                  // add address link from storage
                  href='https://2gis.kg/bishkek/firm/70000001044298822/tab/services?m=74.613883%2C42.826555%2F16%2Fp%2F0.94%2Fr%2F-0.19'
                  target='_blank'
                >
                  {item.company_address}
                </Typography>
                <Typography variant='a' href={`tel:${item.phone_number}`}>
                  {item.phone_number}
                </Typography>
              </article>
            ))}
          </section>
          {smData.map((item) => (
            <article className={styles.qrBlock} key={item.id}>
              <div>
                {/* add QR link from storage */}
                <img src={QR} alt='qr code' />
              </div>
              <div className={styles.iconsContainer}>
                <Link to={item.partners_whatsapp} target='_blank'>
                  <img src={icon_1} alt='whapp icon' />
                </Link>

                <Link to={item.telegram_link} target='_blank'>
                  <img src={icon_2} alt='tgrm icon' />
                </Link>

                <Link to={item.tiktok_link} target='_blank'>
                  <img src={icon_3} alt='tt icon' />
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </footer>
  )
}
