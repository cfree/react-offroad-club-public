import React from 'react';

import styles from '../assets/styles/pages/indexPage.module.scss';
import Layout from '../components/layout/Layout';
// import Image from '../components/image';
import logo from '../assets/images/logo.png';
import SEO from '../components/common/Seo';
import Intro from '../components/common/Intro';
import LatestEvents from '../components/common/LatestEvents';
import Buckets from '../components/common/Buckets';
import Gallery from '../components/common/Gallery';
// import LatestNews from '../components/common/LatestNews';
import { fullSiteTitle } from '../config';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro>
      <p>
        <img className={styles.logo} src={logo} alt={`${fullSiteTitle} logo`} />
        Formed in 1986, the 4-Players of Colorado is a not-for-profit club that
        donates funds raised during the year to local organizations benefitting
        the Colorado LGBTQI+ community. As an LGBTQI+ social organization, we
        share an enjoyment for traveling backroads and off-road trails
        responsibly in four-wheel drive vehicles.
      </p>
    </Intro>
    <Gallery />
    <Buckets />
    <LatestEvents />
    {/* <LatestNews /> */}
  </Layout>
);

export default IndexPage;
