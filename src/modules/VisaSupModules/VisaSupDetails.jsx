import { Heading, MultiContainer, Breadcrumbs, Loader } from '@/ui'
import { VisaSupDetailsApi } from './api/VisaSupDetailsApi'
import styles from './VisaSupDetails.module.scss'
import { useParams } from 'react-router-dom'
import { CheckBlock } from './components/CheckBlock/CheckBlock'
import { InfoFrame } from './components/InfoFrame/InfoFrame'
import { EndSection } from './components/EndSection/EndSection'
import { useEffect } from 'react'

export const VisaSupDetails = () => {
  const { id } = useParams()

  const { visaData, visaRequest, isLoading } = VisaSupDetailsApi()

  useEffect(() => {
    if (id) {
      visaRequest(id)
    }
  }, [id, visaRequest])

  if (isLoading || !visaData?.visa_go) {
    return <Loader />
  }

  const titleKey = visaData.visa_go[0]

  return (
    <>
      <Breadcrumbs breadcrumbKey="visaSupport" thirdElement={titleKey.title} />
      <MultiContainer className={styles.visaPage}>
        <Heading text={titleKey.title} className={styles.title} />
        <CheckBlock mainContent={visaData.visa_go || []} />
        <InfoFrame moreInfo={visaData.images || []} />
        <EndSection themeTitle={titleKey.title} />
      </MultiContainer>
    </>
  )
}
