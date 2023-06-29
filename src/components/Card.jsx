import "./Card.css"
import pro1 from "../assets/p1.png"

import React from 'react'
import { NavLink } from "react-router-dom"

const Card = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">
                Projects
            </h1>
            <div className="project-container">
                <div className="project-card">
                    <img src="https://raw.githubusercontent.com/deep-pansara/fruit-store-react/master/img/fhome.jpeg" alt="" />
                    <h2 className="project-title">Fruit Store - React</h2>
                    <div className="pro-details">
                        <p>Online fruit store website made with react.js, express.js and mongoDB</p>
                        <div className="pro-btns">
                            <NavLink to="https://raw.githubusercontent.com/deep-pansara/fruit-store-react/master/img/fhome.jpeg" className="btn">View</NavLink>
                            <NavLink to="https://github.com/deep-pansara/fruit-store-react" className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>


                <div className="project-card">
                    <img src="https://raw.githubusercontent.com/deep-pansara/zomato-clone/master/img/zomato-full.jpg" alt="" />
                    <h2 className="project-title">Zomato Clone</h2>
                    <div className="pro-details">
                        <p>Online food delivery website made with MERN stack Technologies.</p>
                        <div className="pro-btns">
                            <NavLink to="https://raw.githubusercontent.com/deep-pansara/zomato-clone/master/img/zomato-full.jpg" className="btn">View</NavLink>
                            <NavLink to="https://github.com/deep-pansara/zomato-clone" className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <img src="https://raw.githubusercontent.com/deep-pansara/JavaScript-Projects/master/js-small-projects.jpg" alt="" />
                    <h2 className="project-title">Small Projects</h2>
                    <div className="pro-details">
                        <p>Some small projects which made using only Vanilla JavaScript.</p>
                        <div className="pro-btns">
                            <NavLink to="https://raw.githubusercontent.com/deep-pansara/JavaScript-Projects/master/js-small-projects.jpg" className="btn">View</NavLink>
                            <NavLink to="https://github.com/deep-pansara/JavaScript-Projects" className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card
