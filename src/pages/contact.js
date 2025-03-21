import React from 'react';

import styles from '../assets/styles/pages/contactPage.module.scss';
import Layout from '../components/layout/Layout';
import Main from '../components/layout/Main';
import SEO from '../components/common/Seo';
import ContactForm from '../components/common/ContactForm';
import walkieImg from '../../content/assets/walkie.jpg';

const ContactPage = () => (
  <Layout showSmallHeader={true} pageTitle="Contact Us">
    <SEO title="Contact" />

    <Main>
      <h2>Our Address</h2>
      PO Box 300001
      <br />
      Denver, CO 80203
      <h2>Send Us A Message</h2>
      <p>
        Our monthly meetings are at 7pm on the second Tuesday of each month
        (seasonally, see calendar for details)
      </p>
      <div className={styles.cols}>
        <ContactForm />
        <img className={styles.walkieImg} src={walkieImg} alt="Contact us" />
      </div>
    </Main>
  </Layout>
);

export default ContactPage;
