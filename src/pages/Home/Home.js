import React from 'react'
import Hero from './Hero/Hero'
import AboutSection from './AboutSection/AboutSection';
import Services from './Services/Services';
import Contact from '../../components/ContactSection/ContactSection'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
        <Hero/>
        <AboutSection/>
        <Services />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home;