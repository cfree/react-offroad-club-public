import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../Header';
import Footer from '../Footer';
// import styles from './Layout.module.scss';

const Layout = ({ showSmallHeader, pageTitle, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          pageTitle={pageTitle}
          siteTitle={data.site.siteMetadata.title}
          small={showSmallHeader}
        />
        {children}
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
);

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  showSmallHeader: PropTypes.bool,
};

Layout.defaultProps = {
  pageTitle: '',
  showSmallHeader: false,
}

export default Layout;
