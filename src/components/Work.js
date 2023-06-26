import "./Card.css"
import pro1 from "../assets/p1.png"

import React from 'react'
import { NavLink } from "react-router-dom"

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">
                Projets
            </h1>
            <div className="project-container">
                <div className="project-card">
                    <img src={pro1} alt="" />
                    <h2 className="project-title">Project Title</h2>
                    <div className="pro-details">
                        <p>this is text</p>
                        <div className="pro-btns">
                            <NavLink to="url.com" className="btn">View</NavLink>
                            <NavLink to="url.com" className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work