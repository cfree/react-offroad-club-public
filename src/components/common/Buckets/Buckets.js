import React from 'react';

import styles from './Buckets.module.scss';
import Container from '../../utility/Container';

const Buckets = () => (
  <div className={styles.Buckets}>
    <Container>
      <h2>For Over 30 years, Our Mission Hasn't Changed</h2>
      <ul className={styles.list}>
        <li>
          <strong>Sport</strong>
          <br />
          Promote the safe and responsible pursuit of the sport of
          four-wheeling.
        </li>
        <li>
          <strong>Environment</strong>
          <br />
          Foster a respect for and commitment to preserving the environment.
        </li>
        <li>
          <strong>Brotherhood</strong>
          <br />
          Provide social, educational, and recreational activities for our out
          and proud members.
        </li>
      </ul>
    </Container>
  </div>
);

export default Buckets;
