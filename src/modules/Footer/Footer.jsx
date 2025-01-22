import styles from './Footer.module.scss';
import { Logo } from '@/app/assets/icons/Logo';
import { Link } from 'react-router-dom';
import { ContactsStorage } from '@/app/Storage/Storage';
import { useEffect } from 'react';
import { Contacts } from './components/Contacts/Contacts';
import { Socials } from './components/Socials/Socials';
import { PageNavigation } from './components/PageNavigation/PageNavigation';
import { Copyright } from './components/Copyright/Copyright';
import { PATH } from '@/utils/constants/constants';

export const Footer = () => {
  const { contactsData, contactsRequest, smData, smRequest } = ContactsStorage();

  useEffect(() => {
    contactsRequest(), smRequest();
  }, [contactsRequest, smRequest]);

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
          <Socials data={smData} />
        </section>
      </div>
      <Copyright />
    </footer>
  );
};
