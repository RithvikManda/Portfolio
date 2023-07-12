import React, { useState } from 'react'
import"./Navbar.css"
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from "react-icons/fa"
import Resume from "./CV.pdf"


function Navbar() {
    const [click,setClick]=useState(false)
    const handleClick =()=>setClick(!click)
    const [color,setColor]=useState(false)

    const changeColor=()=>{
        if(window.scrollY>=100){
            setColor(true)
        }else{
            setColor(false)
        }        
    }

window.addEventListener=("scroll",changeColor)

  return (

    <div className={color?"header header-bg":"header"}>
        <Link to="/" className='link'><span>Rithvik</span></Link>
        <ul className={click?"nav-menu active":"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/skill">Skills</Link>
            </li>
            <li>
                <Link to="/project">Projects</Link>
            </li>
            
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            
            <li className='li1'>
                <a href={Resume} download className="navbtn" style={{color:"rgb(248,217,15)"}}>RESUME</a>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>

            {click?( <FaTimes size={20} style={{color:"#fff"}} />):(<FaBars size={20} style={{color:"#fff"}} />)}

            
           
        </div>
    </div>
  )
}

export default Navbar