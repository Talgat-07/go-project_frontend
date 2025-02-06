import { useState } from 'react'
import { useOutsideClick } from '@/utils/hooks/useOutsideClick.js'
import { FilterArrow } from '@/app/assets/icons/FilterArrow.jsx'
import styles from './Filter.module.scss'
import { useTranslation } from 'react-i18next'

export const Filter = (props) => {
  const { t } = useTranslation()
  const {
    label,
    options = [],
    field,
    value,
    onChange,
    multiple = false,
  } = props
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useOutsideClick(() => setIsOpen(false))
  const toggleDropdown = () => {
    setIsOpen(prev => !prev)
  }
  const singleOptions = !multiple
    ? [{ id: 'all', name: t("filter.chooseAll") }, ...options]
    : options

  const filterText = () => {
    if (multiple) {
      if (!value.length) return label
      return `${t("filter.selected")} ${value.length}`
    } else {
      return value || label
    }
  }

  const handleSelect = (option) => {
    if (!multiple && option.id === 'all') {
      onChange(field, '')
      setIsOpen(false)
      return
    }
    if (multiple) {
      const optionName = option.name
      let newSelected
      if (value.includes(optionName)) {
        newSelected = value.filter(v => v !== optionName)
      } else {
        newSelected = [...value, optionName]
      }
      onChange(field, newSelected)
    } else {
      const optionName = option.name
      onChange(field, optionName)
      setIsOpen(false)
    }
  }

  const isSelected = (optionName) => {
    if (multiple) return value.includes(optionName)
    return value === optionName
  }

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={styles.dropdownBtn}
        onClick={toggleDropdown}
      >
        {filterText()}
        <FilterArrow className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`} />
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {singleOptions.map(option => {
            const selected = isSelected(option.name)
            return (
              <div
                key={option.id}
                className={styles.dropdownItem}
                onClick={() => handleSelect(option)}
              >
                {multiple && option.id !== 'all' && (
                  <input
                    type='checkbox'
                    checked={selected}
                    readOnly
                    className={styles.checkbox}
                  />
                )}
                {option.name}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
