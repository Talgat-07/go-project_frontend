import { useEffect } from 'react';
import { DeliveryApi } from './api/DeliveryApi';
import { PageIntroductionPart } from '@/ui';
import { Loader } from '@/ui';

export const DeliveryModule = () => {
  const { deliveryData, deliveryRequest, isLoading } = DeliveryApi();

  useEffect(() => {
    deliveryRequest();
  }, [deliveryRequest]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <PageIntroductionPart
        title={deliveryData[0]?.title}
        subtitle={deliveryData[0]?.subtitle}
        airDelivery={deliveryData[0]?.air_delivery}
        cargoDelivery={deliveryData[0]?.cargo_delivery}
        imagesArray={deliveryData[0]?.images}
        easyGoLink={deliveryData[0]?.easy_go_url}
        costAndProcess={deliveryData[0]?.description}
        data={deliveryData}
        deliveryTours={true}
        maxWidth={250}
        btnText={'Переходи на Easy Go'}
      />
    </>
  );
};
