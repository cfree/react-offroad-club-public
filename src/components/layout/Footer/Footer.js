import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Container from '../../utility/Container';

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: `black`,
      headerBottom: `1.45rem`,
      color: `white`,
    }}
  >
    <Container>
      <button>Become a Member</button> / Social Media
      <br />© {new Date().getFullYear()} {siteTitle}
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
