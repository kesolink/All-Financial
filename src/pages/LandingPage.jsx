import React from 'react'
import Hero from '../component/Hero'
import Financial from '../component/Financial'
import Features from '../component/Features'
import Discover from '../component/Discover'
import Next from '../component/Next'
import Footer from '../component/Footer'

function LandingPage() {
  return (
    <div>
        <Hero />
        <Financial />
        <Features />
        <Discover />
        <Next />
        <Footer />
    </div>
  )
}

export default LandingPage