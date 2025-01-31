import { Typography } from '@/ui'
import styles from './Table.module.scss'

export const Table = ({ data }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className={styles.key}>
                <Typography variant="fs20" weight="fw5" color="#FF6600">{row.key}</Typography>
              </td>
              <td className={styles.value}>
                <Typography variant="fs20" weight="fw4">{row.value}</Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
