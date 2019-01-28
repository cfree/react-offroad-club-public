import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './container.module.scss';

const Container = ({ small = false, children }) => {
  const classes = classnames(small ? styles.containerSmall : styles.container);

  return <div className={classes}>{children}</div>;
};

Container.propTypes = {
  small: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
