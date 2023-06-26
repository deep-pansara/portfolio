import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Skills from '../components/Skills'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImage />
            <Card />
            <Skills />
            <Footer />
        </div>
    )
}
export default Home