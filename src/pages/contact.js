import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/Layout';
import Main from '../components/layout/Main';
import SEO from '../components/common/Seo';
import ContactForm from '../components/common/ContactForm';

const ContactPage = () => (
  <Layout showSmallHeader={true} pageTitle="Contact Us">
    <SEO title="Contact" />

    <Main>
      <h2>Send Us a Message</h2>
      <ContactForm />
    </Main>
  </Layout>
);

export default ContactPage;
