import { useEffect } from 'react'
import { individualToursApi } from './api/IndividualToursApi'
import { PageIntroductionPart } from '@/ui/PageIntroductionPart/PageIntroductionPart'

export const IndividualToursModules = () => {
  const { individualToursData, individualToursRequest } = individualToursApi()

  useEffect(() => {
    individualToursRequest()
  }, [individualToursRequest])

  console.log(individualToursData)

  return (
    <>
      <PageIntroductionPart
        data={individualToursData}
        title={individualToursData[0]?.title}
        imagesArray={individualToursData[0]?.images}
        costAndProcess={individualToursData[0]?.full_description}
        individualIntro={individualToursData[0]?.short_description}
        btnText={'Заказать тур'}
        individualTours={true}
        maxWidth={208}
      />
    </>
  )
}
