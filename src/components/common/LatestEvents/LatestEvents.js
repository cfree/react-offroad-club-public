import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';

import styles from './LatestEvents.module.scss';
import Container from '../../utility/Container';
import Button from '../../utility/Button';
import { StaticQuery, graphql } from 'gatsby';

class LatestEvents extends Component {
  render() {
    return (
      <StaticQuery
        query={
          graphql`
            query {
              allIcal(sort: { fields: start, order: ASC }, filter: { start: { regex: "/2019-/" } }) {
                edges {
                  node {
                    start
                    end
                    summary
                  }
                }
              }
            }
          `} 
        render={({ allIcal }) => {
          return <div className={styles.LatestEvents}>
              <Container>
                <ul className={styles.list}>
                  {allIcal.edges.map((edge, index) => <li key={index}>{edge.node.summary}</li>)}
                </ul>
                {/* <Button className={styles.btn} ghost={true} handleClick={() => {}}>
                  See all events
                </Button> */}
              </Container>
            </div>;
          }
        } 
      />
    );
  }
}

LatestEvents.propTypes = {
  small: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default LatestEvents;
