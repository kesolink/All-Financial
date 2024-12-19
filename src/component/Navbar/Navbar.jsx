import React from 'react'
import "./Navbar.scss"
import logo from "../../assets/logomian.png"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav-container'>
        <div className="logo-wrap">
        <img src={logo} alt="" />
        </div>

        
        <div className="wrap"> 
           <Link to="/"><span>Home</span></Link> 
           <Link to="./about"><span>About Us</span></Link> 
           <Link to="./service"><span>Services</span></Link> 
            <span>Contact Us</span>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar