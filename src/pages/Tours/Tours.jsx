import { AllTours } from '@/modules/ToursModules/Tours/AllTours.jsx'
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Breadcrumbs } from '@/ui'

export const Tours = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>Все туры</title>
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
