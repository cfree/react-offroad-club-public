import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Carousel from 'nuka-carousel';

import styles from './Gallery.module.scss';
import Container from '../../utility/Container';

class Gallery extends Component {
  onImageLoad = () => {
    this.nukaRef.onResize();
  };

  render() {
    return (
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
                <Carousel
                  ref={ref => {
                    this.nukaRef = ref;
                  }}
                >
                  {galleryImgs.edges.map((img, index) => {
                    const { fluid } = img.node.childImageSharp;

                    return (
                      <Img
                        key={index}
                        fluid={fluid}
                        alt={`Fourwheeling #${index + 1}`}
                        onLoad={this.onImageLoad}
                      />
                    );
                  })}
                </Carousel>
              )}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default Gallery;
