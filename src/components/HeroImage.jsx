import "./HeroImage.css";
import IntroImage from "../assets/background.jpg"

import React from 'react'
import { Link } from "react-router-dom";

const HeroImage = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img src={IntroImage} alt="introimage" className="intro-img" />
            </div>
            <div className="content">
                <p> Hi, I'M DEEP PANSARA</p>
                <h1>Full Stack WebDeveloper</h1>
                <div>
                    <Link to={"/project"} className="btn" >Projects</Link>
                    <Link to={"/contact"} className="btn btn-light" >Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImage