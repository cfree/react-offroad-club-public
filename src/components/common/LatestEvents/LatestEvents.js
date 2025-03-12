import React, { useState, useEffect } from 'react';
import Axios from 'axios';

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
          Come visit us at our monthly meeting at 7pm on the second Tuesday of
          each month (seasonally, check calendar below for details)
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
                      <Calendar date={event.startTime} />
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
