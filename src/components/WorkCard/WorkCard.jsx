import React from 'react'
import "./WorkCard.css"
import pro1 from "../assests/hero2.png"
import { NavLink } from 'react-router-dom'
import udemy from "../WorkCard/udemy.avif"
import weather from "../WorkCard/weather.avif"

function WorkCard() {
  return (
    <div className="work-container">
        <h1 className='project-heading'>SOME OF MY RECENT WORKS.</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={udemy} alt="" />
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
                <img src={pro1} alt="" />
                <h2 className='project-title'>Title</h2>
                <div className="pro-details">
                    <p>This is text</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard