import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import Card from '../components/Card'

const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImage2 heading="PROJECTS." text="Some of my most recent works" />
            <Card />
            <Footer />
        </div>
    )
}

export default Project