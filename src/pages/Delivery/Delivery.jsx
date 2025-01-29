import styles from './Delivery.module.scss';
import DeliveryModule from '@/modules/DeliveryModules/DeliveryModule';
import { Helmet, HelmetProvider } from "react-helmet-async";

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
      <main className={styles.deliveryPage}>
        <DeliveryModule />
      </main></>
  );
};
