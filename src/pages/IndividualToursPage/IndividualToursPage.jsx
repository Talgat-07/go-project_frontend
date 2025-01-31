import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Breadcrumbs } from '@/ui';
import { IndividualToursModules } from '@/modules/IndividualToursModules/IndividualToursModules';

export const IndividualToursPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>Индивидуальный тур</title>
          <meta name='description' content='' />
          <meta name='keywords' content='' />
          <meta property='og:title' content='Индивидуальный тур' />
          <meta property='og:description' content='Индивидуальный тур' />
        </Helmet>
      </HelmetProvider>
      <main>
        <Breadcrumbs breadcrumbKey='delivery' />
        <IndividualToursModules />
      </main>
    </>
  );
};
