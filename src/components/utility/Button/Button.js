import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Button.module.scss';

const Button = ({ handleClick, children, ghost, className = '' }) => {
  const classes = classnames(
    className, 
    {
      [styles.Button]: !ghost,
      [styles.ButtonGhost]: ghost,
    },
  );
  
  return (
    <button onClick={handleClick} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  ghost: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  ghost: false,
  handleClick: () => {},
}

export default Button;
