import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './LatestEvents.module.scss';
import Container from '../../utility/Container';

class LatestEvents extends Component {
  render() {
    return (
      <div className={styles.LatestEvents}>
        <Container>
          <ul>
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
          </ul>

          <button>See all events</button>
        </Container>
      </div>
    );
  }
}

LatestEvents.propTypes = {
  small: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default LatestEvents;
