import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Carousel from 'nuka-carousel';

import styles from './Gallery.module.scss';
import Container from '../../utility/Container';
import Button from '../../utility/Button';

const Gallery = () => (
  <div className={styles.Gallery}>
    <Container>
      <div className={styles.galleryWrapper}>
        <StaticQuery
          query={graphql`
            query {
              galleryImgs: allFile(
                filter: { sourceInstanceName: { eq: "gallery" } }
              ) {
                edges {
                  node {
                    childImageSharp {
                      fluid(maxWidth: 960, maxHeight: 600) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          `}
          render={({ galleryImgs }) => (
            <Carousel>
              {galleryImgs.edges.map((img, index) => {
                const { fluid } = img.node.childImageSharp;

                return (
                  <Img key={index} fluid={fluid} alt={`Fourwheeling #${index}`} />
                );
              })}
            </Carousel>
          )}
        />
      </div>
    </Container>
  </div>
);

Gallery.propTypes = {
  small: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Gallery;
