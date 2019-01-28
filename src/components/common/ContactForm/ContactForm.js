import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import styles from './ContactForm.module.scss';
import Container from '../../utility/Container';

class ContactForm extends Component {
  render() {
    return <div className={styles.ContactForm}>
        <Container>
          <Formik 
            initialValues={{ name: '', email: '', subject: '', message: '' }} 
            validate={values => {
              let errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => <Form>
                <Field placeholder="Name" type="name" name="name" />
                <ErrorMessage name="name" component="div" />

                <Field placeholder="Email" type="email" name="email" />
                <ErrorMessage name="email" component="div" />

                <Field placeholder="Subject" type="subject" name="subject" />
                <ErrorMessage name="subject" component="div" />

                <Field placeholder="Message" type="message" component="textarea" name="message" />
                <ErrorMessage name="message" component="div" />

                {/* reCaptcha */}

                <button type="submit" disabled={isSubmitting}>
                  Send
                </button>
              </Form>}
          </Formik>
        </Container>
      </div>;
  }
}

ContactForm.propTypes = {
  small: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ContactForm;
