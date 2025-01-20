import styles from './SwitchButton.module.scss';
import { Typography } from '../Typography/Typography';

export const SwitchButton = props => {
  const {
    text,
    children,
    className,
    onClick,
    maxWidth = '100%',
    disabled,
  } = props;

  const classNamedGenerated = [
    styles.btn,
    className,
  ].join(' ')
    .trim();

  return (
    <button
      onClick={onClick}
      className={`${classNamedGenerated}`}
      disabled={disabled}
      aria-label="button"
      style={{ maxWidth: maxWidth }}
    >
      <Typography>{text}</Typography>
      {children}
    </button>
  );
};
