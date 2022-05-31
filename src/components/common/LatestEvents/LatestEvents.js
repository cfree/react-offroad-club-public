import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { formatInTimeZone } from 'date-fns-tz';

import styles from './LatestEvents.module.scss';
import Container from '../../utility/Container';
import Calendar from '../../common/Calendar';

const LatestEvents = () => {
  const [loading, setLoading] = useState(false);
  const [upcomingEvents, setUpcomingEvents] = useState();

  useEffect(() => {
    setLoading(true);
    Axios.get('https://api.4-playersofcolorado.org/calendar/upcoming/9')
      .then(results => {
        setUpcomingEvents(results.data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className={styles.LatestEvents}>
      <Container>
        <h2 className={styles.heading}>Upcoming Events</h2>
        <p>
          Come visit us at our monthly meeting at 7pm on the second Monday of
          each month at{' '}
          <a
            href="https://www.google.com/maps/dir//Charlie's+Denver,+900+E+Colfax+Ave,+Denver,+CO+80218/@39.7397694,-104.978392,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876c792d2c23dbc9:0xb4e1b42dcd87972!2m2!1d-104.9762311!2d39.739667"
            target="_blank"
            rel="noreferrer"
          >
            Charlie's Denver
          </a>
        </p>
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {upcomingEvents && upcomingEvents.length > 0 ? (
              <ul className={styles.list}>
                {upcomingEvents.map(event => (
                  <li className={styles.listItem} key={event.id}>
                    <div>
                      <Calendar
                        date={formatInTimeZone(
                          new Date(event.startTime),
                          'America/Denver'
                        )}
                      />
                    </div>
                    <h4 className={styles.eventHeading}>
                      <a
                        href={`https://members.4-playersofcolorado.org/event/${event.id}`}
                      >
                        {event.title}
                      </a>
                    </h4>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No events scheduled</p>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default LatestEvents;
