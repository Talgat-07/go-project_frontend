import styles from './Input.module.scss'
import { Typography } from '..'

export const Input = props => {
  const {
    label,
    helperText,
    value,
    onChange,
    name,
    maxLength,
    placeholder,
    textarea = false,
  } = props

  return (
    <div className={styles.inputBlock}>
      <Typography
        variant="fs16"
        className={styles.label}
      >
        {label}
        <span className={styles.obvious}>*</span>

      </Typography>
      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          name={name}
          maxLength={maxLength}
          placeholder={placeholder}
          className={styles.textarea}
        />
      ) : (
        <input
          className={styles.input}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          maxLength={maxLength}
          minLength={2}
        />
      )}
      {helperText && (
        <div className={styles.helperTextBlock}>
          <Typography
            color="red"
            variant="fs14"
            className={styles.helperText}
          >
            {helperText}
          </Typography>
        </div>
      )}
    </div>
  )
}
