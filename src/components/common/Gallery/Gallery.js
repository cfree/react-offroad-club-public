import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Gallery.module.scss';
import Container from '../../utility/Container';

const Gallery = () => (
  <div className={styles.Gallery}>
    <Container>
      <ul>
        <li>Photo 1</li>
        <li>Photo 2</li>
        <li>Photo 3</li>
      </ul>
    </Container>
  </div>
);

Gallery.propTypes = {
  small: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Gallery;
