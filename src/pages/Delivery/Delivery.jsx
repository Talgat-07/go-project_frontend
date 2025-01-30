import DeliveryModule from '@/modules/DeliveryModules/DeliveryModule'
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Breadcrumbs } from '@/ui'

export const Delivery = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>Доставка товаров</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <meta property="og:title" content="Доставка товаров" />
          <meta property="og:description" content="Доставка товаров" />
        </Helmet>
      </HelmetProvider>
      <main>
        <Breadcrumbs breadcrumbKey="delivery" />
        <DeliveryModule />
      </main></>
  )
}
