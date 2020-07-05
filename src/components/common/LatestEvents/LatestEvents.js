import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import styles from './LatestEvents.module.scss';
import Container from '../../utility/Container';
import Calendar from '../../common/Calendar';


class LatestEvents extends Component {
  render() {
    const year = new Date().getFullYear();

    return (
      <div className={styles.LatestEvents}>
        <Container>
          <h2 className={styles.heading}>Upcoming Events</h2>
          <StaticQuery
            query={
              graphql`
                query {
                  allIcal(
                    sort: {
                      fields: start,
                      order: ASC
                    },
                    filter: {
                      start: { regex: `/${year}-/` } 
                    }
                  ) {
                    edges {
                      node {
                        start
                        summary
                      }
                    }
                  }
                }
              `} 
            render={
              ({ allIcal }) => {
                const today = new Date();
                const upcomingEvents = allIcal.edges
                  .filter(edge => (new Date(edge.node.start)) >= today)
                  .splice(0, 3);

                return (
                  <ul className={styles.list}>
                    {upcomingEvents.map((edge, index) => (
                      <li className={styles.listItem} key={index}>
                        <Calendar date={edge.node.start} />
                        <h4 className={styles.eventHeading}>{edge.node.summary}</h4>
                      </li>
                    ))}
                  </ul>
                );
              }
            } 
          />
        </Container>
      </div>
    );
  }
}

export default LatestEvents;
