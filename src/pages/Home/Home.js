import React from 'react'
import Hero from './Hero/Hero'
import AboutSection from './AboutSection/AboutSection';
import Services from './Services/Services';

function Home() {
  return (
    <div>
        <Hero/>
        <AboutSection/>
        <Services/>
    </div>
  )
}

export default Home