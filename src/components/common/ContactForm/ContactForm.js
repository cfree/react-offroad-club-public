import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Formik, Field, ErrorMessage } from 'formik';
import { navigate } from 'gatsby';

import styles from './ContactForm.module.scss';
import Button from '../../utility/Button';

class ContactForm extends Component {
  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  render() {
    return <div className={styles.ContactForm}>
      <Formik 
        initialValues={{ name: '', email: '', message: '' }} 
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          fetch('/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: this.encode({
              'form-name': 'contact',
              ...values,
            }),
          })
            .then(() => {
              setSubmitting(false);
              navigate('/thanks');
            })
            .catch(() => {
              setSubmitting(false);
              setStatus({
                msg: 'There was a problem submitting your message. Please try again later.',
              });
            });
        }}
      >
        {({ isSubmitting, handleSubmit }, ...props) => (
          <form
            name="contact"
            method="post"
            action="/thanks"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit} 
            {...props}
          >
            <div className={styles.formFields}>
              <Field className={styles.field} placeholder="Name" type="name" name="name" />
              <ErrorMessage className={styles.error} name="name" component="div" />

              <Field className={styles.field} placeholder="Email" type="email" name="email" />
              <ErrorMessage className={styles.error} name="email" component="div" />

              <Field className={styles.field} placeholder="Message" type="message" component="textarea" name="message" />
              <ErrorMessage className={styles.error} name="message" component="div" />

              {/* reCaptcha */}
            </div>
            <Button className={styles.btn} type="submit" disabled={isSubmitting}>
              Send
            </Button>
          </form>
        )}
      </Formik>
      </div>;
  }
}

ContactForm.propTypes = {
  small: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ContactForm;
