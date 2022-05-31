import React from 'react';
import PropTypes from 'prop-types';
import { formatInTimeZone } from 'date-fns-tz';

import styles from './Calendar.module.scss';

const Calendar = ({ date }) => (
  <div className={styles.Calendar}>
    <div className={styles.month}>
      {formatInTimeZone(new Date(date), 'America/Denver', 'MMM')}
    </div>
    <div className={styles.date}>
      {formatInTimeZone(new Date(date), 'America/Denver', 'D')}
    </div>
  </div>
);

Calendar.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Calendar;
