import styles from './Footer.module.scss'
import { Logo } from '@/app/assets/icons/Logo'
import { Link } from 'react-router-dom'
import { Contacts } from './components/Contacts/Contacts'
import { Socials } from './components/Socials/Socials'
import { PageNavigation } from './components/PageNavigation/PageNavigation'
import { Copyright } from './components/Copyright/Copyright'
import { PATH } from '@/utils/constants/constants'

export const Footer = ({ contactsData, smData }) => {

  return (
    <footer className={styles.footer}>
      <div className={styles.mainSection}>
        <section className={styles.routesSection}>
          <Link to={PATH.home} target='_top'>
            <Logo />
          </Link>
          <div className={styles.navigation}>
            <PageNavigation />
            <Contacts data={contactsData} />
          </div>
          <Socials data={smData} contactsData={contactsData} />
        </section>
      </div>
      <Copyright />
    </footer>
  )
}
