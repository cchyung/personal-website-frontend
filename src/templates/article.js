import React from "react"
import { Link, graphql } from 'gatsby'
import showdown from 'showdown'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import githubIcon from "../components/github-icon.png"
import globeIcon from "../components/globe-icon.png"

import "./article.css"

const ArticleTemplate = ({data}) => (
    <Layout>
        <div className='article-content'>
          <div className='article-title'>
            <h1 className='title highlight'>{ data.strapiArticle.title }</h1>
            <p className='subtitle'>{ data.strapiArticle.subtitle }</p>
            <div className='external-links'>
              <ExternalLink 
                externallink={ data.strapiArticle.externallink }
              />
              <GithubLink 
                githublink={ data.strapiArticle.githublink }
              />


            </div>
          </div>
          
          <Img className='cover' fluid={data.strapiArticle.cover.childImageSharp.fluid}/>
          <div className='article-body' dangerouslySetInnerHTML={{__html: convertMarkdown(data.strapiArticle.content)}}/>
        </div>
    </Layout>
)

function ExternalLink(props) {

  if( props.externallink !== 'none')
  {
    return ( 
      <a className='external-link' href={ props.externallink }>
        <img className='external-link-icon' src={globeIcon}/>
        <div className='external-link-text-container'>
          <p className='external-link-text'>Go to External Page</p>
        </div>
      </a>
    )
  }
  return null;
}

function GithubLink(props) {

  if( props.githublink !== 'none')
  {
    return ( 
      <a className='external-link' href={ props.githublink }>
        <img className='external-link-icon' src={githubIcon}/>
        <div className='external-link-text-container'>
          <p className='external-link-text'>Go to Github Page</p>
        </div>
      </a>
    )
  }
  return null;
}

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
      githublink
      externallink
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