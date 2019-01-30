import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

import styles from './Footer.module.scss';
import Container from '../../utility/Container';
import Button from '../../utility/Button';
import logoSrc from '../../../assets/images/icon.png';

const Footer = ({ siteTitle }) => (
  <footer className={styles.Footer}>
    <Location>
      {({ navigate, location }) => (
        location.pathname !== '/membership' && (
          <div className={styles.pageCap}>
            <Button handleClick={() => navigate('/join')}>Get Started</Button>
          </div>
        )
      )}
    </Location>
    <Container className={styles.info}>
      <Link to="/">
        <img className={styles.logo} src={logoSrc} alt={`${siteTitle} logo`} />
      </Link>
      <br />© {new Date().getFullYear()} {siteTitle}
      <br />
      All Rights Reserved
    </Container>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
