import styles from './Filter.module.scss'

export const Filter = ({ label, options, field, value, onChange }) => (
  <select
    name={field}
    className={styles.dropdownBtn}
    value={value}
    onChange={(e) => onChange(field, e.target.value)}
  >
    <option value=''>Все {label}</option>
    {options.map(option => (
      <option key={option.id} value={option.name}>
        {option.name}
      </option>
    ))}
  </select>
)