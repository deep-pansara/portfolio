import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from 'react'
import HeroImage2 from '../components/HeroImage2'
import AboutContent from '../components/AboutContent'

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImage2 heading="ABOUT." text="I'm a MERN FullStack WebDeveloper" />
            <AboutContent />
            <Footer />
        </div>
    )
}

export default About