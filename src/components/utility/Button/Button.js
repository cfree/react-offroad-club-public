import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Button.module.scss';

const Button = ({ handleClick, children, ghost, className, href, ...rest }) => {
  const classes = classnames(className, {
    [styles.Button]: !ghost,
    [styles.ButtonGhost]: ghost,
  });

  const btnComponent = href ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <button onClick={handleClick} className={classes} {...rest}>
      {children}
    </button>
  );

  return btnComponent;
};

Button.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  ghost: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
};

Button.defaultProps = {
  handleClick: () => {},
  ghost: false,
  className: '',
  href: '',
};

export default Button;
