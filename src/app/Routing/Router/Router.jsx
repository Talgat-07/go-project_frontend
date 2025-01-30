import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { loadComponent } from '@/utils/helpers/helpers'
import { PATH } from '@/utils/constants/constants'
import { Loader } from '@/ui'

const Layout = loadComponent(() => import("@/app/Routing/Layout/Layout"), "Layout");
const HomePage = loadComponent(() => import("@/pages"), "HomePage");
const NotFound = loadComponent(() => import("@/pages"), "NotFound");
const Tours = loadComponent(() => import("@/pages"), "Tours");
const TourDetail = loadComponent(() => import("@/pages"), "TourDetail");
const VisaSupport = loadComponent(() => import("@/pages"), "VisaSupport");
const Delivery = loadComponent(() => import("@/pages"), "Delivery");
const ServerError = loadComponent(() => import("@/pages"), "ServerError");

const router = createBrowserRouter(
  [
    {
      path: PATH.home,
      element: <Layout />,
      errorElement: <ServerError />,
      children: [
        { index: true, element: <HomePage /> },
        { path: PATH.tours, element: <Tours /> },
        { path: PATH.tourDetail, element: <TourDetail /> },
        { path: PATH.visaSupport, element: <VisaSupport /> },
        { path: PATH.delivery, element: <Delivery /> },
      ],
    },
    { path: PATH.notFound, element: <NotFound /> },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionStatusRevalidation: true,
    },
  },
)

const AppRouter = () => {
  return (
    <RouterProvider
      fallbackElement={<Loader />}
      future={{ v7_startTransition: true }}
      router={router}
    />
  )
}

export default AppRouter
