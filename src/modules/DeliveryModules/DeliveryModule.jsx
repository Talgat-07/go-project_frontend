import { useEffect } from 'react'
import { DeliveryApi } from './api/DeliveryApi'
import { CostBlock } from '@/ui'
import { PageIntroductionPart } from '@/ui'
import { Loader } from '@/ui'

export const DeliveryModule = () => {
  const { deliveryData, deliveryRequest, isLoading } = DeliveryApi()

  useEffect(() => {
    deliveryRequest()
  }, [deliveryRequest])

  if (isLoading) {
      return <Loader />
    }

  return (
    <>
      <PageIntroductionPart data={deliveryData} />
      <CostBlock />
    </>
  )
}

export default DeliveryModule
