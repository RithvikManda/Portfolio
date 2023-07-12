import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/HeroImg2.js/HeroImg2'
import ContactMe from '../components/ContactMe/ContactMe'

function Contact() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT ME" text="Drop a message to contact me" />
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default Contact