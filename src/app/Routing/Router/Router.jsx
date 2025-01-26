import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '@/pages/Home/Home'
import { NotFound } from '@/pages/NotFound/NotFound'
import { Tours } from '@/pages/Tours/Tours'
import { VisaSupport } from '@/pages/VisaSupport/VisaSupport'
import { Delivery } from '@/pages/Delivery/Delivery'
import { PATH } from '@/utils/constants/constants'
import { Loader } from '@/ui/Loader/Loader'
import { ServerError } from '@/pages/ServerError/ServerError'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ServerError />,
      children: [
        { index: true, element: <Home /> },
        { path: PATH.tours, element: <Tours /> },
        { path: PATH.visa_current, element: <VisaSupport /> },
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
