import React from 'react'
import "./Footer.css"
import {FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa"

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p>123 Housing Society.</p>
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
                <h4>About the Company</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, libero.</p>  
                <div className="social">
                <FaFacebook size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaTwitter size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaLinkedin size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                    </div>          
            </div>
        </div>
    </div>
  )
}

export default Footer