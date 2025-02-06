import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Breadcrumbs } from '@/ui'
import { IndividualToursModules } from '@/modules/IndividualToursModules/IndividualToursModules'
import { useTranslation } from 'react-i18next'

export const IndividualToursPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>{t("headings.indTour")}</title>
          <meta name='description' content='' />
          <meta name='keywords' content='' />
          <meta property='og:title' content='Индивидуальный тур' />
          <meta property='og:description' content='Индивидуальный тур' />
        </Helmet>
      </HelmetProvider>
      <main>
        <Breadcrumbs breadcrumbKey='individualTours' />
        <IndividualToursModules />
      </main>
    </>
  )
}
