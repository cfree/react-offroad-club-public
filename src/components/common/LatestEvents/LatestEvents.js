import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import styles from './LatestEvents.module.scss';
import Container from '../../utility/Container';
import Calendar from '../../common/Calendar';

class LatestEvents extends Component {
  render() {
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
          <StaticQuery
            query={graphql`
              query {
                allIcal(sort: { fields: start, order: ASC }) {
                  edges {
                    node {
                      start
                      summary
                    }
                  }
                }
              }
            `}
            render={({ allIcal }) => {
              const today = new Date();
              const upcomingEvents = allIcal.edges
                .filter(edge => new Date(edge.node.start) >= today)
                .splice(0, 9);

              return (
                <>
                  {upcomingEvents.length > 0 ? (
                    <ul className={styles.list}>
                      {upcomingEvents.map((edge, index) => (
                        <li className={styles.listItem} key={index}>
                          <div>
                            <Calendar date={edge.node.start} />
                          </div>
                          <h4 className={styles.eventHeading}>
                            {edge.node.summary}
                          </h4>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No events scheduled</p>
                  )}
                </>
              );
            }}
          />
        </Container>
      </div>
    );
  }
}

export default LatestEvents;
