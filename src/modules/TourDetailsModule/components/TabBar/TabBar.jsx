import { useState } from "react"
import styles from "./TabBar.module.scss"
import { Typography } from "@/ui"
import { Table } from "../Table/Table"
import { DayTab } from "../DayTab/DayTab"
import { useTranslation } from "react-i18next"

export const TabBar = ({ item = {} }) => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      id: 0,
      label: t("tableTabs.general"),
      content: item?.general?.map(({ title, description }) => (
        { key: title, value: description }
      )) || []
    },
    {
      id: 1,
      label: t("tableTabs.placement"),
      content: item?.placement?.map(({ title, description }) => (
        { key: title, value: description }
      )) || []
    },
    {
      id: 2,
      label: t("tableTabs.tourProgram"),
      content: item?.tour_program?.map(({ day, date, description }) => (
        { day: day, date, description }
      )) || []
    },
    {
      id: 3,
      label: t("tableTabs.conditions"),
      content: item?.conditions?.map(({ title, description }) => (
        { key: title, value: description }
      )) || []
    },
    {
      id: 4,
      label: t("tableTabs.additonal"),
      content: item?.additional?.map(({ title, description }) => (
        { key: title, value: description }
      )) || []
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.tabBar}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <Typography weight="fw5" variant="fs18">{tab.label}</Typography>
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {activeTab === 2 ? (
          <DayTab data={tabs[activeTab].content} />
        ) : (
          tabs[activeTab].content.length > 0 && <Table data={tabs[activeTab].content} />
        )}
      </div>
    </div>
  )
}
