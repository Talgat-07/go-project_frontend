import { useParams } from 'react-router-dom'
import styles from './VisaSupport.module.scss'
import { VisaSupportApi } from '@/modules/VisaSupModules/VisaSupport/api/VisaSupportApi'
import { useEffect } from 'react'
import { Typography } from '@/ui/Typography/Typography'
import { InfoFrame } from './components/InfoFrame/InfoFrame'
import { CheckBlock } from './components/CheckBlock/CheckBlock'
import { MultiContainer } from '@/ui/Multicontainer/Multicontainer'
import { EndSection } from './components/EndSection/EndSection'
import { PulseLoader } from 'react-spinners'

export const VisaSupport = () => {
  const { id } = useParams()
  const { visaData, visaRequest } = VisaSupportApi()

  useEffect(() => {
    visaRequest()
  }, [visaRequest])

  const visa = visaData.find((currentVisa) => currentVisa.id === Number(id))

  if (!visa)
    return (
      <MultiContainer className={styles.loaderContainer}>
        <PulseLoader
          color='#FF6600'
          size={25}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </MultiContainer>
    )

  return (
    <main className={styles.visaPage}>
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
    </main>
  )
}
