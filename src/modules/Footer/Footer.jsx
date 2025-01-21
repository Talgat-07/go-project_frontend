import styles from './Footer.module.scss'
import { Logo } from '@/app/assets/icons/Logo'
import { Link } from 'react-router-dom'
import { ContactsStorage } from '@/app/Storage/Storage'
import { useEffect } from 'react'
import { Contacts } from './components/Contacts/Contacts'
import { Socials } from './components/Socials/Socials'
import { PageNavigation } from './components/PageNavigation/PageNavigation'
import { Copyright } from './components/Copyright/Copyright';
import { PATH } from '@/utils/constants/constants';

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
            <Link to={PATH.home} target='_top'>
              <Logo />
            </Link>
          </div>
          <section className={styles.navigation}>
            <PageNavigation />
            <Contacts data={contactsData} />
          </section>
          <Socials data={smData} />
        </section>
      </main>
      <Copyright />
    </footer>
  )
}
