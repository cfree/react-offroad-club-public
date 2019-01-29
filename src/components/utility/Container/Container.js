import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Container.module.scss';

const Container = ({ small = false, children, className = '' }) => {
  const classes = classnames({
    [styles.containerSmall]: small,
    [styles.container]: !small,
    [className]: true,
  });

  return <div className={classes}>{children}</div>;
};

Container.propTypes = {
  small: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
