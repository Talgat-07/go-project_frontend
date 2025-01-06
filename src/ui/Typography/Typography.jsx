import styles from './Typography.module.scss'
import parse from 'html-react-parser'

export const Typography = (props) => {
  const {
    variant,
    children,
    className,
    color,
    truncate = false,
    onClick,
    id,
    href,
    target,
  } = props

  const Tags = {
    a: 'a',
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

  const TagName = Tags[variant in Tags ? variant : 'span']

  const renderChildren = !truncate
    ? children
    : truncateString(children, truncate)

  const parsedChildren =
    typeof renderChildren === 'string' ? parse(renderChildren) : renderChildren

  return (
    <TagName
      onClick={onClick}
      id={id}
      className={classNamedGenerated}
      href={variant === 'a' ? href : null}
      target={variant === 'a' ? target : null}
      style={{ color }}
    >
      {parsedChildren}
    </TagName>
  )
}
