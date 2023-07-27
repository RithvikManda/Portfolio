import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import AboutContent from '../components/AboutContent/AboutContent'
import ContactMe from "../components/ContactMe/ContactMe"

import WorkCard from '../components/WorkCard/WorkCard'




function Home() {
  return (
    <div>
      <Navbar/>
      
      <Hero/>
     
      <Footer/>
    </div>

  )
}

export default Home