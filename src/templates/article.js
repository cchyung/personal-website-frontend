import React from "react"
import { Link, graphql } from 'gatsby'
import showdown from 'showdown'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import githubIcon from "../components/github-icon.png"

import "./article.css"

const ArticleTemplate = ({data}) => (
    <Layout>
        <div className='article-content'>
          <div className='article-title'>
            <h1 className='title highlight'>{ data.strapiArticle.title }</h1>
            <p className='subtitle'>{ data.strapiArticle.subtitle }</p>
            <div className='external-links'>
              <a className='external-link' href='google.com'> 
                <img className='external-link-icon' src={githubIcon}/>
                <div className='external-link-text-container'>
                  <p className='external-link-text'>Go to GitHub Project</p>
                </div>
              </a>
              <a className='external-link' src='google.com'> 
                <img className='external-link-icon' src={githubIcon}/>
                <div className='external-link-text-container'>
                  <p className='external-link-text'>Go to GitHub Project</p>
                </div>
              </a>
            </div>
          </div>
          
          <Img className='cover' fluid={data.strapiArticle.cover.childImageSharp.fluid}/>
          <div className='article-body' dangerouslySetInnerHTML={{__html: convertMarkdown(data.strapiArticle.content)}}/>
        </div>
    </Layout>
)

let convertMarkdown = (md) => 
{
  let converter = new showdown.Converter()
  return(converter.makeHtml(md));
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      subtitle
      content
      cover {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
    }
  }
`