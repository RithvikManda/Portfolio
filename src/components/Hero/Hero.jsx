import React from 'react'
import "./Hero.css"
import IntroImg from "../assests/hero1.png"
import { Link } from 'react-router-dom'
import { ReactTyped as Typed } from 'react-typed';



function Hero() {
  return (
    <div className='hero'>
      <div className="mask">
        <img src={IntroImg} alt="" className='into-img' />

      </div>
      <div className="content">
      <Typed
        className='typed-text'
        strings={["Hi, I'm Rithvik","I'm a Web Designer","I'm a Web Developer",]}
        typeSpeed={40}
        backSpeed={60}
        loop  />
        <h1>React Developer</h1>
        <div className=''>
          <Link to="/project" className='btn'>PROJECTS</Link>
          <Link to="/contact" className='btn-light'>CONTACT</Link>
          
          </div>
      </div>
    </div>
  )
}

export default Hero