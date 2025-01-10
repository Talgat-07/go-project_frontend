import styles from './MultiContainer.module.scss'

export const Multicontainer = ({ children, className }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>
}
