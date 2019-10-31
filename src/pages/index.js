import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import profilePic from "./profile-picture-circle.png"

import "./index.css"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Conner Chyung"/>
    <div className='home-page'>
      <div className='home-container'>
        <div className='home-content'>
          <img className='prof-pic' src={ profilePic }/>
          <div className='intro-text'>
            <h2>Hi, I'm Conner Chyung</h2>
            <p>
              I'm currently senior studying Computer Engineering, Computer Science at the University of Southern California.
            </p>
            <p>
              I’m passionate about machine learning, digital design, product management, entrepreneurship, and music production.
            </p>
            <p>
              Previously a Software Engineering Intern at Visa Inc.
            </p>
            <p>
              <Link to='portfolio' id="see-more-btn" className='highlight-hover'>Here’s what I’ve been up to.</Link>
            </p>
          </div>
        </div>
      </div>

    </div>
  </Layout>
)

export default IndexPage

// export const pageQuery = graphql`  
//   query IndexQuery {
//     allStrapiArticle {
//       edges {
//         node {
//           id
//           Title
//           Content
//           Description
//         }
//       }
//     }
//   }
// `
