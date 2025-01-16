import './SwitchButton.scss'

export const SwitchButton = (props) => {
  const {
    children,
    onClick,
    variant,
    className,
    style,
    disabled = false,
    maxWidth,
    padding,
  } = props

  const btnClassNames = [
    'default',
    variant === 'animation_1' ? 'animation_1' : '',
    variant === 'animation_2' ? 'animation_2' : '',
    variant === 'animation_3' ? 'animation_3' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={`${className} ${btnClassNames}`}
      onClick={!disabled ? onClick : undefined}
      style={{ ...style, maxWidth, padding }}
      disabled={disabled}
    >
      <p>{children}</p>
    </button>
  )
}
