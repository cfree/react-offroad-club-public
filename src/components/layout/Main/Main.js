import React from 'react';
import PropTypes from 'prop-types';

import styles from './Main.module.scss';
import Container from '../../utility/Container';

const Main = ({ children }) => (
  <main className={styles.Main}>
    <Container small={true}>{children}</Container>
  </main>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
