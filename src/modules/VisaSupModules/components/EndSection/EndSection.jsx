import { SwitchButton } from '@/ui'
import styles from './End.module.scss'
import { Typography } from '@/ui'
import { FormModal } from '@/ui/Form/Form'
import { useModalStore } from '@/utils/hooks/useModalStore'
import { useTranslation } from 'react-i18next'
export const EndSection = ({ themeTitle }) => {
  const { t } = useTranslation()
  const { openModal } = useModalStore()

  return (
    <>
      <section className={styles.endSection}>
        <Typography variant='h4' weight='fw5' className={styles.title}>
          {t("visaPage.infoText")}
        </Typography>
        <SwitchButton maxWidth='208px' onClick={openModal}>{t("buttons.orderVisa")}</SwitchButton>
      </section>
      <FormModal themeTitle={themeTitle} />
    </>
  )
}
