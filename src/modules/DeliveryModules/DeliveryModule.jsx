import { useEffect } from 'react'
import { DeliveryApi } from './api/DeliveryApi'
import { CostBlock } from '@/ui/ProcessAndCost/CostBlock'
import { PageIntroductionPart } from '@/ui/PageIntroductionPart/PageIntroductionPart'

export const DeliveryModule = () => {
  const { deliveryData, deliveryRequest } = DeliveryApi()
  useEffect(() => {
    deliveryRequest()
  }, [deliveryRequest])

  return (
    <>
      <PageIntroductionPart data={deliveryData} />
      <CostBlock />
    </>
  )
}

export default DeliveryModule
