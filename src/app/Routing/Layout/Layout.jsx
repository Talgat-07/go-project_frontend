import { Outlet } from 'react-router-dom';
import { ScrollButton } from '@/ui';
import { Footer } from '@/modules/Footer/Footer';
import { Suspense } from 'react';
import { Loader } from '@/ui';
import { Header } from '@/modules/Header/Header';
import styles from './Layout.module.scss';
import { RequestForm } from '@/modules/RequestForm/RequestForm';
import { ContactsStorage } from '@/app/Storage/Storage';
import { useEffect } from 'react';

export const Layout = () => {
  const { contactsData, contactsRequest, smData, smRequest } =
    ContactsStorage();

  useEffect(() => {
    contactsRequest();
    smRequest();
  }, [contactsRequest, smRequest]);

  return (
    <div className={styles.wrapper}>
      <Header contactsData={contactsData} />
      <RequestForm />
      <div className={styles.content}>
        <ScrollButton />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer contactsData={contactsData} smData={smData} />
    </div>
  );
};
