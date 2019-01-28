import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from './Header.module.scss';
import Menu from '../Menu';
import Container from '../../utility/Container';

const Header = ({ pageTitle, siteTitle, small }) => (
  <header
    className={small ? `${styles.header} ${styles.small}` : styles.header}
  >
    <Container>
      <Menu siteTitle={siteTitle} />
      {small ? (
        <div className={styles.hero}>
          <h1 className={styles.pageTitle}>{pageTitle}</h1>
        </div>
      ) : (
        <div className={styles.hero}>
          <h2 className={styles.tagline}>Where Dirty Boys Go To Get Dirtier</h2>
          <h3 className={styles.sinceline}>Getting Dirty Since 1986</h3>
          <button>Become a Member</button>
        </div>
      )}
    </Container>
  </header>
);

Header.propTypes = {
  pageTitle: PropTypes.string,
  siteTitle: PropTypes.string,
  small: PropTypes.bool,
};

Header.defaultProps = {
  pageTitle: '',
  siteTitle: '',
  small: false,
};

export default Header;
