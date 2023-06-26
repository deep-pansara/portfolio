import { Link } from "react-router-dom"
import "./AboutContent.css"
import React from 'react'

const AboutContent = () => {
    return (
        <div className="about"> <div className="left">
            <h1>Who Am I ?</h1>
            <p>Hi, I'm Deep, and I'm a passionate MERN stack developer.
                As a MERN stack enthusiast, I love building robust and scalable web applications using MongoDB, Express.js, React.js, and Node.js.
                With a solid foundation in JavaScript, I have honed my skills in the MERN stack to create seamless full-stack solutions.
                I thrive in the world of MERN, leveraging React.js to create interactive user interfaces and Express.js and Node.js to build robust backend APIs.
                My expertise lies in designing and implementing RESTful APIs using Node.js and Express.js, along with MongoDB for database management.
                I'm adept at crafting engaging and intuitive user experiences with React.js, utilizing modern tools and libraries like Redux and React Router.
                Throughout my journey as a MERN stack developer,
                Continuous learning is at the core of my professional growth, and I stay up-to-date with the latest advancements in the MERN stack ecosystem.</p>
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