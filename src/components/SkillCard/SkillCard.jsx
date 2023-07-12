import React from 'react'
import "./SkillCard.css"
import pro1 from "../assests/hero2.png"
import { NavLink } from 'react-router-dom'
import {FaCode, FaDatabase,FaDesktop} from "react-icons/fa"


function SkillCard() {
  return (
    <div className="work-container">
        <h1 className='project-heading'>SKILLS</h1>
        <div className="project-container">
            <div className="project-card">
                <div className='icon'>
                <FaCode size={40} style={{color:"rgb(248,217,15)"}}/>
                </div>
            
            
                <h2 className='project-title'>Front-End</h2>
                <div className="pro-details">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>BootStrap</p>
                    <p>ReactJs</p>
                    
                </div>
            </div>

            <div className="project-card">
                <div className='icon'>
                <FaDatabase size={40} style={{color:"rgb(248,217,15)"}}/>
                </div>
            
            
                <h2 className='project-title'>Back-End</h2>
                <div className="pro-details">
                    <p>NodeJs</p>
                    <p>ExpressJs</p>
                    <p>MongoDB</p>
                    <p>Mongoose</p>
                    <p>Restful API</p>
                    
                </div>
            </div>

            <div className="project-card">
                <div className='icon'>
                <FaDesktop size={40} style={{color:'rgb(248,217,15)'}}/>
                </div>
            
            
                <h2 className='project-title'>Languages</h2>
                <div className="pro-details">
                    <p>C</p>
                    <p>C++</p>
                    <p>Java</p>
                    <p>Python</p>
                    <p>JavaScript</p>
                    
                </div>
            </div>
            
        </div>
        
        
        
    </div>
  )
}

export default SkillCard