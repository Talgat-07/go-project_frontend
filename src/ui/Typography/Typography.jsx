import styles from './Typography.module.scss';
import { Fragment } from 'react';

export const Typography = props => {
  const {
    variant = 'fs18',
    weight = 'regular',
    children,
    className,
    color,
    truncate = false,
  } = props;

  const Tags = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    fs24: 'p',
    fs22: 'p',
    fs20: 'p',
    fs18: 'p',
    fs16: 'p',
    fs14: 'p',
  };

  const classNamedGenerated = [
    styles.text,
    styles[variant],
    styles[weight],
    className,
  ]
    .join(' ')
    .trim();

  const truncateString = (str, maxNumber) => {
    if (typeof str === 'string') {
      return str.length <= maxNumber
        ? str
        : str.slice(0, maxNumber) + '...';
    }
    return str;
  };

  const convertNewlinesToBreaks = text => {
    if (typeof text === 'string') {
      return text
        .split('\r\n')
        .map((line, index) => <Fragment key={index}>{line}</Fragment>);
    } else {
      return text;
    }
  };

  const TagName = Tags[variant in Tags ? variant : 'fs18'];

  return (
    <TagName className={classNamedGenerated} style={{ color: color }}>
      {!truncate
        ? convertNewlinesToBreaks(children)
        : truncateString(children, truncate)}
    </TagName>
  );
};
