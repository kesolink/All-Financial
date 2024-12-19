import React from 'react'
import dot from "../../assets/dot-1.png"
function ServiceHero() {
  return (
    <div className='about-hero-container'>
        <div className="about-hero-wrapper">
            <header>Our Services</header>
            <p>Empowering Financial Institutions with Comprehensive Banking Solutions.</p>
        </div>
        <img src={dot} alt="" />
    </div>
  )
}

export default ServiceHero