import React from 'react'
import "./WorkCard.css"
// import pro1 from "../assests/hero2.png"
import { NavLink } from 'react-router-dom'

import weather from "../WorkCard/weather.avif"
import edufy from "../WorkCard/edufy.png"
import foodify from "../WorkCard/foodify.avif"

function WorkCard() {

  return (
    <div className="work-container">
        <h1 className='project-heading'>SOME OF MY RECENT WORKS.</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={edufy} alt="" />
                <h2 className='project-title'>Udemome</h2>
                <div className="pro-details">
                    <p>This a front-end clone of Udemy using ReactJs</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink target='_blank' to="https://github.com/RithvikManda/udemyClone" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <img src={weather}  alt="" />
                <h2 className='project-title'>WReporter</h2>
                <div className="pro-details">
                    <p>This is Weather Reporting Website done with ReactJs</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink target='_blank' to="https://github.com/RithvikManda/WeatherApp" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <img src={foodify} alt="" />
                <h2 className='project-title'>Foodify!</h2>
                <div className="pro-details">
                    <p>A Website of a food application made with ReactJs</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="https://github.com/RithvikManda/Foodiify" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard