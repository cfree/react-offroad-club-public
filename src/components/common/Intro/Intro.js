import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';

import styles from './Intro.module.scss';
import Container from '../../utility/Container';

const Intro = ({ children }) => (
  <div className={styles.Intro}>
    <Container small={true}>
      {children}
    </Container>
  </div>
);

Intro.propTypes = {
  small: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Intro;
