import { useState } from 'react'
import { useOutsideClick } from '@/utils/hooks/useOutsideClick.js'
import styles from './Filter.module.scss'

export const Filter = (props) => {
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
    ? [{ id: 'all', name: 'Выбрать все' }, ...options]
    : options

  const filterText = () => {
    if (multiple) {
      if (!value.length) return label
      return `Выбрано: ${value.length}`
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
