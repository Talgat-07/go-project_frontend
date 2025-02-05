import { Typography } from "@/ui"
import styles from "./SuccessMes.module.scss"
import { SuccessIcon } from "@/app/assets/icons/SuccessIcon"

export const SuccessMes = () => {
  return (
    <div className={styles.success}>
      <SuccessIcon />
      <Typography variant="fs24" weight="fw6" color="#00A91B">
        Успешно отправлено
      </Typography>
    </div>
  )
}
