import { AllTours } from '@/modules/ToursModules/AllTours.jsx'
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Breadcrumbs } from '@/ui'
import { useTranslation } from 'react-i18next'

export const Tours = () => {
  const { t } = useTranslation()

  return (
    <>
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>{t("buttons.allTours")}</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <meta property="og:title" content="Все туры" />
          <meta property="og:description" content="Все туры" />
        </Helmet>
      </HelmetProvider>
      <main>
        <Breadcrumbs breadcrumbKey="tours" />
        <AllTours />
      </main>
    </>
  )
}

export default Tours
