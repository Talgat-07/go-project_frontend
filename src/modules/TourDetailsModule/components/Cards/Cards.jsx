import { Date } from "@/app/assets/icons/tourData/Date"
import styles from "./Cards.module.scss"
import { Typography } from "@/ui"
import { VisaType } from "@/app/assets/icons/tourData/VisaType"
import { Price } from "@/app/assets/icons/tourData/Price"
import { Cities } from "@/app/assets/icons/tourData/Cities"
import { InProgramm } from "@/app/assets/icons/tourData/InProgramm"
import { Hotels } from "@/app/assets/icons/tourData/Hotels"
import { useTranslation } from "react-i18next"

export const Cards = ({ item }) => {
  const { t } = useTranslation()

  const data = [
    {
      title: t("tourData.date"),
      description: item?.tour_date,
      icon: <Date />
    },
    {
      title: t("tourData.visaType"),
      description: item?.visa_type,
      icon: <VisaType />
    },
    {
      title: t("tourData.price"),
      description: item?.price,
      icon: <Price />
    },
    {
      title: t("tourData.cities"),
      description: item?.cities,
      icon: <Cities />
    },
    {
      title: t("tourData.inProgram"),
      description: item?.program,
      icon: <InProgramm />
    },
    {
      title: t("tourData.hotels"),
      description: item?.hotels,
      icon: <Hotels />
    },
  ]
  return (
    <div className={styles.cardsBlock}>
      {data.map((item, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.icon}>
            {item.icon}
          </div>
          <div className={styles.texts}>
            <Typography variant='h4' weight='fw5'>
              {item.title}
            </Typography>
            <Typography variant='fs22'>
              {item.description}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  )
}
