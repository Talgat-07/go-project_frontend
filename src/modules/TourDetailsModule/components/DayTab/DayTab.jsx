import { Table } from "../Table/Table"
import styles from "./DayTab.module.scss"
import { Typography } from "@/ui"
import { useState } from "react"

export const DayTab = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = data.map((item, index) => ({
    id: index,
    day: item.day,
    key: item.date, 
    value: item.description
  }))

  return (
    <div className={styles.container}>
      <div className={styles.tabBar}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <Typography variant="fs20">{tab.day}</Typography>
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {tabs[activeTab]?.value && (
          <Table data={[{ key: tabs[activeTab].key, value: tabs[activeTab].value }]} />
        )}
      </div>
    </div>
  )
}
