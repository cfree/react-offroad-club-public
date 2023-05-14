import React from 'react';
import PropTypes from 'prop-types';
import { formatInTimeZone } from 'date-fns-tz';

import styles from './Calendar.module.scss';

const Calendar = ({ date }) => (
  <div
    className={styles.Calendar}
    title={formatInTimeZone(new Date(date), 'America/Denver', 'MM/dd/yyyy')}
  >
    <div className={styles.month}>
      {date && formatInTimeZone(new Date(date), 'America/Denver', 'MMM')}
    </div>
    <div className={styles.date}>
      {date && formatInTimeZone(new Date(date), 'America/Denver', 'd')}
    </div>
  </div>
);

Calendar.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Calendar;
