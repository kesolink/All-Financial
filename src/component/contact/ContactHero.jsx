import React from 'react'
import './ContactHero.scss'
import dot from "../../assets/dot-1.png"
function ContactHero() {
  return (
    <div className='about-hero-container'>
        <div className="about-hero-wrapper">
            <header>Get in Touch with Us</header>
            <p>We’re here to help you transform your banking experience.</p>
        </div>
        <img src={dot} alt="" />
    </div>
  )
}

export default ContactHero