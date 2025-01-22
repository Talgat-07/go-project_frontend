import { Outlet, useLocation } from 'react-router-dom';
import { ScrollButton } from '@/ui/ScrollButton/ScrollButton';
import { Footer } from '@/modules/Footer/Footer';
import { NotFound } from '@/pages/NotFound/NotFound';
import { Suspense } from 'react';
import { Loader } from '@/ui/Loader/Loader';
import { Header } from '@/modules/Header/Header';
import styles from "./Layout.module.scss";
import { Breadcrumbs } from '@/ui/Breadcrumbs/Breadcrumbs';

export const Layout = () => {
  let path = useLocation();

  if (path.pathname === '/*') return <NotFound />;

  return (
    <div className={styles.wrapper}>
      <Header />
      <Breadcrumbs />
      <div className={styles.content}>
        <ScrollButton />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
