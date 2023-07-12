import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/HeroImg2.js/HeroImg2'
import AboutContent from '../components/AboutContent/AboutContent'

function About() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT ME." text="I'm a Friendly Front-End Developer." />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About