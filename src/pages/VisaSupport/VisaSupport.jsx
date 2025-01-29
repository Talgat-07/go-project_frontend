import { CurrentVIsa } from '@/modules/VisaSupModules/CurrentVisa/CurrentVIsa'
import { Helmet, HelmetProvider } from "react-helmet-async"

export const VisaSupport = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>Виза</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <meta property="og:title" content="Виза в Китай" />
          <meta property="og:description" content="Виза в Китай" />
        </Helmet>
      </HelmetProvider>
      <main>
        <CurrentVIsa />
      </main>
    </>
  );
};
