import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '@/pages/Home/Home'
import { NotFound } from '@/pages/NotFound/NotFound'
import { Tours } from '@/pages/Tours/Tours'
import { VisaSupport } from '@/pages/VisaSupport/VisaSupport'
import { Delivery } from '@/pages/Delivery/Delivery'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'tours', element: <Tours /> },
        { path: 'visa-support', element: <VisaSupport /> },
        { path: 'delivery', element: <Delivery /> },
        { path: '*', element: <NotFound /> },
      ],
    },
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
    <RouterProvider future={{ v7_startTransition: true }} router={router} />
  )
}

export default AppRouter
