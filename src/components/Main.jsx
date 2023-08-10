import React from 'react'
import "./main.css"
import About from './AboutPage/About'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <div className='scale-in-center'>


                <div className='content-main'>
                    <h1 className='main-text'>Hi, I'm Tom</h1>
                    <p>A 17y/o Self taught developer from Melbourne</p>
                </div>
            </div>
        </div>
    )
}

export default Main