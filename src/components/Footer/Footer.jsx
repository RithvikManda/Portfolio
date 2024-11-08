import React from 'react'
import "./Footer.css"
import {FaGithub, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaInstagram} from "react-icons/fa"

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p>35-4-298 , Hanamkonda , Warangal</p>
                    <p>India.</p>
                </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>+91 6304260184</h4>
                </div>      
                <div className="gmail">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>m.rithvik2710@gmail.com</h4>
                    </div>          
            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>Here are some of my social handles,where you can come to know about me even more.</p>  
                <div className="social">
                    <a target='_blank'  href="https://github.com/RithvikManda" rel="noopener noreferrer"><FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                    <a target='_blank' href="https://www.instagram.com/rithvik_2710/" rel="noopener noreferrer"><FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                
                
                <a target='_blank' href="https://www.linkedin.com/in/rithvik-manda-7a9a5a257/" rel="noopener noreferrer"><FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                
                    </div>          
            </div>
        </div>
    </div>
  )
}

export default Footer