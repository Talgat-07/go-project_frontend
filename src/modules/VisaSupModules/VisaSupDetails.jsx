import { Heading, MultiContainer } from '@/ui'
import { VisaSupDetailsApi } from './api/VisaSupDetailsApi'
import styles from './VisaSupDetails.module.scss'
import { useParams } from 'react-router-dom'
import { CheckBlock } from './components/CheckBlock/CheckBlock'
import { InfoFrame } from './components/InfoFrame/InfoFrame'
import { EndSection } from './components/EndSection/EndSection'
import { useEffect } from 'react'
import { Loader } from '@/ui'

export const VisaSupDetails = () => {
  const { id } = useParams()

  const { visaData, visaRequest, isLoading } = VisaSupDetailsApi()

  useEffect(() => {
    if (id) {
      visaRequest(id)
    }
  }, [id, visaRequest])

  if (isLoading) {
    return <Loader />
  }

  const topPart = visaData?.visa_go[0]

  return (
    <MultiContainer className={styles.visaPage}>
      <Heading text={topPart?.title} className={styles.title} />
      <CheckBlock item={topPart} />
      <InfoFrame moreInfo={visaData?.images || []} />
      <EndSection />
    </MultiContainer>
  )
}
