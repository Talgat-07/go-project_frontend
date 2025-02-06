import { useEffect } from 'react'
import { individualToursApi } from './api/IndividualToursApi'
import { PageIntroductionPart } from '@/ui/PageIntroductionPart/PageIntroductionPart'
import { Loader } from '@/ui'
import { useTranslation } from 'react-i18next'

export const IndividualToursModules = () => {
  const { t } = useTranslation()
  const { individualToursData, individualToursRequest, isLoading } =
    individualToursApi()

  useEffect(() => {
    individualToursRequest()
  }, [individualToursRequest])

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <PageIntroductionPart
        data={individualToursData}
        title={individualToursData[0]?.title}
        imagesArray={individualToursData[0]?.images}
        costAndProcess={individualToursData[0]?.full_description}
        individualIntro={individualToursData[0]?.short_description}
        btnText={t("buttons.orderTour")}
        individualTours={true}
        maxWidth={208}
      />
    </>
  )
}
