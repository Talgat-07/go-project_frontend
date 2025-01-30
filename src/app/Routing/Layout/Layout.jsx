import { Outlet } from 'react-router-dom'
import { ScrollButton } from '@/ui'
import { Footer } from '@/modules/Footer/Footer'
import { Suspense } from 'react'
import { Loader } from '@/ui'
import { Header } from '@/modules/Header/Header'
import styles from './Layout.module.scss'
import { RequestForm } from '@/modules/RequestForm/RequestForm'

export const Layout = () => {

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <RequestForm />
        <ScrollButton />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}