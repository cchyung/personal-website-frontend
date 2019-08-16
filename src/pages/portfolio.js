import React from "react"
import { Link, graphql } from "gatsby"
import Masonry from 'react-masonry-component';

import Layout from "../components/layout"
import PortfolioItem from "../components/portfolio-item"
import Image from "../components/image"
import SEO from "../components/seo"

import "./portfolio.css"

const masonryOptions = {
    transitionDuration: 0,
    horizontalOrder: false,
    resize: true
};

const PortfolioPage = ({data}) => (
    <Layout>
        <div className='portfolio-container'>
            {/* <div
                className={'portfolio-container'} 
                options={masonryOptions}
            > */}
                {data.allStrapiArticle.edges.map(document => (
                    <PortfolioItem 
                        key = { document.node.id }
                        id = { document.node.id }
                        title = { document.node.title } 
                        subtitle = { document.node.subtitle }
                        description = { document.node.description }
                        icon = { document.node.icon.childImageSharp.fixed.src }
                        wide = { document.node.wide }
                    />
                ))}
            </div>
        {/* </div> */}
    </Layout>
)

export default PortfolioPage


export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          subtitle
          description
          wide
          icon {
              childImageSharp {
                  fixed {
                    src
              }
            }
          }
        }
      }
    }
  }
`