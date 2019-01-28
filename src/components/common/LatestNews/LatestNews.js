import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './LatestNews.module.scss';
import Container from '../../utility/Container';

class LatestNews extends Component {
  render() {
    return (
      <div className={styles.LatestNews}>
        <Container>
          <ul>
            <li>Article 1</li>
            <li>Article 2</li>
            <li>Article 3</li>
          </ul>

          <button>See all news</button>
        </Container>
      </div>
    );
  }
}

LatestNews.propTypes = {
  small: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default LatestNews;
