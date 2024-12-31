import React from 'react'
import "./Hero.scss"
import frame from "../assets/Hero-Frame.png"
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='hero-container'>
      <div className="left">
      <header>Banking Simplified, Tailored for You</header>

      <p>Unlock precision and efficiency with All Financial’s advanced banking solutions.</p>
      <Link to='/service'><button>Explore Our Solution</button></Link>
      </div>


      <div className="right">
        <img src={frame} alt="" />
      </div>

    </div>
  )
}

export default Hero

