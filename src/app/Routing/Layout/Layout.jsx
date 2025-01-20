import { Outlet, useLocation } from 'react-router-dom';
import { ScrollButton } from '@/ui/ScrollButton/ScrollButton';
import { Footer } from '@/modules/Footer/Footer';
import { NotFound } from '@/pages/NotFound/NotFound';
import { Suspense } from 'react';
import { Loader } from '@/ui/Loader/Loader';
import { Header } from '@/modules/Header/Header';

export const Layout = () => {
  let path = useLocation();

  if (path.pathname === '/*') return <NotFound />;

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
        <ScrollButton />
      </Suspense>
      <Footer />
    </>
  );
};
export default Layout;
