import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/HeroImg2.js/HeroImg2'
import WorkCard from '../components/WorkCard/WorkCard'

function Project() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Project