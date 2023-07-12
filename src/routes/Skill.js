import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/HeroImg2.js/HeroImg2'
import SkillCard from '../components/SkillCard/SkillCard'



function Skill() {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="SKILLS" text="Some of my Programming Skills"/>
        <SkillCard/>
        
        <Footer/>

    </div>
  )
}

export default Skill