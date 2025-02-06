import { VisaSupDetails } from '@/modules/VisaSupModules/VisaSupDetails'
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Breadcrumbs } from '@/ui'
import { useTranslation } from 'react-i18next'

export const VisaSupport = () => {
  const { t } = useTranslation()
  return (
    <>
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>{t("header.visas")}</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <meta property="og:title" content="Виза в Китай" />
          <meta property="og:description" content="Виза в Китай" />
        </Helmet>
      </HelmetProvider>
      <main>
        <Breadcrumbs breadcrumbKey="visaSupport" />
        <VisaSupDetails />
      </main>
    </>
  )
}
