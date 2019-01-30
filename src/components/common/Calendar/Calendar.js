import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
// import classnames from 'classnames';

import styles from './Calendar.module.scss';

const Calendar = ({ date }) => (
  <div className={styles.Calendar}>
    <div className={styles.month}>{format(date, 'MMM')}</div>
    <div className={styles.date}>{format(date, 'D')}</div>
  </div>
);

Calendar.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Calendar;
