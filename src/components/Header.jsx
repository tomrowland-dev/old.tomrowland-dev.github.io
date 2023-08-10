import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const Header = () => {
    return (
        <div>
            <div className='header-css'>
                <Link to="/"><h1>{"<"}Tom R/{">"}</h1></Link>
                {/* <p className='flav-text'> 16y/o hobby dev</p> */}

                <div className='nav'>

                    <div className='nav-links'>
                        <Link to="/contact"><a> Contact </a> </Link>
                        <Link to="/about"><a> About </a></Link>
                        {/* <Link><a> Portfolio </a></Link> */}

                    </div>

                </div>



            </div>
        </div>
    )
}

export default Header