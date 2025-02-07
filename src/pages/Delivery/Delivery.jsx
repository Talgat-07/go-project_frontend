import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Breadcrumbs } from '@/ui'
import { DeliveryModule } from '@/modules/DeliveryModules/DeliveryModule'
import { useTranslation } from 'react-i18next'

export const Delivery = () => {
  const { t } = useTranslation()

  return (
    <>
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>{t("header.delivery")}</title>
          <meta name='description' content={t("header.delivery")} />
          <meta name='keywords' content='' />
          <meta property='og:title' content='Доставка товаров' />
          <meta property='og:description' content='Доставка товаров' />
        </Helmet>
      </HelmetProvider>
      <main>
        <Breadcrumbs breadcrumbKey='delivery' />
        <DeliveryModule />
      </main>
    </>
  )
}
