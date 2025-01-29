import { MultiContainer } from '@/ui/Multicontainer/Multicontainer'
import { VisaSupportApi } from '../VisaSupport/api/VisaSupportApi'
import styles from './CurrentVIsa.module.scss'
import { Typography } from '@/ui/Typography/Typography'
import { useParams } from 'react-router-dom'
import { CheckBlock } from './components/CheckBlock/CheckBlock'
import { InfoFrame } from './components/InfoFrame/InfoFrame'
import { EndSection } from './components/EndSection/EndSection'
import { ContentLoader } from '@/ui/ContentLoader/ContentLoader'
import { useEffect } from 'react'

export const CurrentVIsa = () => {
  const { id } = useParams()
  const { visaData, visaRequest } = VisaSupportApi()

  useEffect(() => {
    visaRequest()
  }, [visaRequest])

  const visa = visaData.find((currentVisa) => currentVisa.id === Number(id))

  if (!visa) return <ContentLoader />

  return (
    <section className={styles.visaPage}>
      <MultiContainer>
        <Typography variant='h1'>{visa.title}</Typography>
        <CheckBlock />
      </MultiContainer>
      <MultiContainer>
        <InfoFrame moreInfo={visa} />
      </MultiContainer>
      <MultiContainer>
        <EndSection />
      </MultiContainer>
    </section>
  )
}
