import { Typography } from "@/ui"
import styles from "./SuccessMes.module.scss"
import { SuccessIcon } from "@/app/assets/icons/SuccessIcon"
import { useTranslation } from "react-i18next"

export const SuccessMes = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.success}>
      <SuccessIcon />
      <Typography variant="fs24" weight="fw6" color="#00A91B">
        {t("form.success")}
      </Typography>
    </div>
  )
}
