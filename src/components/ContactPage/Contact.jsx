import React from 'react'
import Header from '../Header'
import "./contact.css"

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="tracking-in-expand">
                <div className="content-contact-pg">
                    <h1 className="contact-text">Contact Me</h1>
                    <p>
                        To get in touch, you can contact me via email at: tom@0x14.me
                    </p>
                    <a href="mailto:tom@0x14.me"><button>tom@0x14.me</button></a>
                </div>
            </div>
        </div>
    )
}

export default Contact