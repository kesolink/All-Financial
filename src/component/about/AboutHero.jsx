import React from 'react'
import "./AboutHero.scss"
import dot from "../../assets/dot-1.png"

function AboutHero() {
  return (
    <div className='about-hero-container'>
        <div className="about-hero-wrapper">
            <header>About All Financial</header>
            <p>Revolutionizing Banking with Innovative, User-Friendly Solutions.</p>
        </div>
        <img src={dot} alt="" />
    </div>
  )
}

export default AboutHero