import styles from './PagesHeader.module.scss'
import { Link } from 'react-router-dom'
import logo from '@/app/assets/icons/logo.svg'
import { Typography } from '@/ui/Typography/Typography'
import { FaWhatsapp } from 'react-icons/fa'
import { SlLocationPin } from 'react-icons/sl'
import { ContactsStorage } from '@/app/Storage/Storage'
import { useEffect } from 'react'

export const PagesHeader = () => {
  const { contactsData, contactsRequest } = ContactsStorage()

  useEffect(() => {
    contactsRequest()
  }, [contactsRequest])

  return (
    <header className={styles.navbar}>
      {contactsData.map((item) => (
        <section className={styles.contactsSection} key={item.id}>
          <div className={styles.phoneBlock}>
            <FaWhatsapp
              style={{ color: '#000' }}
              size={'24px'}
              className={styles.icon}
            />
            <Typography variant='a' href={`tel:${item.phone_number}`}>
              {item.phone_number}
            </Typography>
          </div>
          <div className={styles.phoneBlock}>
            <SlLocationPin
              style={{ color: '#000' }}
              size={'24px'}
              className={styles.icon}
            />
            <Typography
              variant='a'
              // add address link from storage
              href='https://2gis.kg/bishkek/firm/70000001044298822/tab/services?m=74.613883%2C42.826555%2F16%2Fp%2F0.94%2Fr%2F-0.19'
              target='_blank'
            >
              {item.company_address}
            </Typography>
          </div>
        </section>
      ))}
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
