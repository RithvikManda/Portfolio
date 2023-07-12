import React from 'react'
import "./AboutContent.css"
import { Link } from 'react-router-dom'
import react1 from "../assests/react1.png"
import react2 from "../assests/react2.png"


function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam facere alias inventore odio illo voluptatem animi eius! Sit, aut in?</p>
            <Link to='/contact'>
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} alt="" className='img' />
                </div>
                <div className="img-stack bottom">
                    <img src={react2} alt="" className='img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent