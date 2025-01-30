import { useEffect } from 'react'
import { DeliveryApi } from './api/DeliveryApi'
import { CostBlock } from '@/ui'
import { PageIntroductionPart } from '@/ui'

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
