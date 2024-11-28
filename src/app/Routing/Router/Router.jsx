import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '@/pages/home/home'
import AnotherPage from 'pages/another-page/another-page'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'another-page', element: <AnotherPage /> },
        // { path: "*", element: <PageNotFound /> },
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
