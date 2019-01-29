import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';

import styles from './Buckets.module.scss';
import Container from '../../utility/Container';

const Buckets = () => (
  <div className={styles.Buckets}>
    <Container>
      <ul className={styles.list}>
        <li>Bucket 1</li>
        <li>Bucket 2</li>
        <li>Bucket 3</li>
      </ul>
    </Container>
  </div>
);

Buckets.propTypes = {
  small: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Buckets;
