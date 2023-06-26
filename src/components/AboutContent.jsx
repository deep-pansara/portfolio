import { Link } from "react-router-dom"
import "./AboutContent.css"
import React from 'react'

const AboutContent = () => {
    return (
        <div className="about"> <div className="left">
            <h1>Who Am I ?</h1>
            <p>I Am Deep Pansara, Fullstack Web Developer</p>
            <Link to="/contact">
                <button className="btn">
                    Contact
                </button>
            </Link>
        </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src="https://www.bigscal.com/wp-content/uploads/2022/09/Features-of-Mern-stack-development-services-You-Should-Know.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent