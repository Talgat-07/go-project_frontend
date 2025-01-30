import { useState } from "react";
import styles from "./TabBar.module.scss";
import { Typography } from "@/ui"

export const TabBar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Общее", content: "Общее" },
    { id: 1, label: "Размещение", content: "Размещение" },
    { id: 2, label: "Программа тура", content: "Программа тура" },
    { id: 3, label: "В пакет включено", content: "В пакет включено" },
    { id: 4, label: "Дополнительно", content: "Дополнительно" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.tabBar}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <Typography variant="fs16">{tab.label}</Typography>
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
