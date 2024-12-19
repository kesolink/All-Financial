import React from 'react'
import "./Hero.scss"
import frame from "../assets/Hero-Frame.png"
function Hero() {
  return (
    <div className='hero-container'>
      <div className="left">
      <header>Banking Simplified, Tailored for You</header>

      <p>Unlock precision and efficiency with All Financial’s advanced banking solutions.</p>
      <button>Explore Our Solution</button>
      </div>

      <div className="right">
        <img src={frame} alt="" />
      </div>

    </div>
  )
}

export default Hero

