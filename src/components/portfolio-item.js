import React from "react"
import { Link, graphql } from 'gatsby'

const PortfolioItem = (props) => {
    let outerClass = (props.wide === true) ? "portfolio-item" : "portfolio-item portfolio-item-wide"
    console.log(outerClass)
    return(
        <div className= { outerClass } style={{ backgroundImage: `url(${props.icon})` }}>
            <Link to={`portfolio/${props.id}`}>
                <div className='portfolio-detail'>
                    <div className='portfolio-detail-content'>
                        <h2 className='highlight'>{props.title}</h2>
                        <h3>{props.subtitle}</h3>
                        <p>
                            {props.description}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
        

}

export default PortfolioItem