import styles from './Typography.module.scss'

export const Typography = (props) => {
  const {
    variant,
    children,
    className,
    color,
    truncate = false,
    onClick,
    id,
  } = props

  const Tags = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    button: 'button',
    p: 'p',
    span: 'span',
  }

  const classNamedGenerated = [styles[variant] || '', styles[color], className]
    .join(' ')
    .trim()

  const truncateString = (stroke, maxNumber) => {
    if (typeof stroke === 'string') {
      return stroke.length <= maxNumber
        ? stroke
        : stroke.slice(0, maxNumber) + '...'
    }
    return stroke
  }

  const TagName = Tags[variant in Tags ? variant : 'body']

  return (
    <>
      <TagName onClick={onClick} id={id} className={classNamedGenerated}>
        {!truncate ? children : truncateString(children, truncate)}
      </TagName>
    </>
  )
}
