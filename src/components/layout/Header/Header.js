import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import styles from './Header.module.scss';
import Menu from '../Menu';
import Container from '../../utility/Container';
import Button from '../../utility/Button';

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
          <h2 className={styles.tagline}>Where Dirty Folx Go To Get Dirtier</h2>
          <h3 className={styles.sinceline}>Getting Dirty Since 1986</h3>
          <Button handleClick={() => navigate('/membership')}>
            Get Started
          </Button>
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
