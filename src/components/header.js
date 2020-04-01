import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import "./header.css"
import githubIcon from "./github-icon.png"
import linkedInIcon from "./linkedin-icon.png"
import soundcloudIcon from "./soundcloud-icon.png"

const Header = ({ siteTitle }) => (
  <div className='header'>
      <div className='header-content'>
        <Link to="/" id='hero'>
          Conner <em className='highlight'>Chyung</em>
        </Link>

        <ul className='nav'>
          <li className='nav-item'><Link to="/"><em className='highlight-hover'>Home</em></Link></li>          
          <li className='nav-item'><Link to="portfolio"><em className='highlight-hover'>Projects</em></Link></li>          
          <li className='nav-item'><a href="https://www.dropbox.com/s/k8bf13p84uouhnj/Conner%20Chyung%20Resume%20Fall%202019.pdf?dl=1"><em className='highlight-hover'>Resume</em></a></li>
          {/* <li className='nav-item'><em className='highlight-hover'>Contact</em></li> */}
        </ul>

        <div className='social-icons'>
          <a className='social-icon' src='https://github.com/cchyung'>
            <img src={githubIcon}/>
          </a>
          <a className='social-icon' src='https://www.linkedin.com/in/connerchyung/'>
            <img src={linkedInIcon}/>
          </a>
          <a className='social-icon' src='https://soundcloud.com/taejinmusic'>
            <img src={soundcloudIcon}/>
          </a>
        </div>
      </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
