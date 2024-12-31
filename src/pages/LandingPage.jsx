import React from 'react'
import Hero from '../component/Hero'
import Financial from '../component/Financial'
import Features from '../component/Features'
import Discover from '../component/Discover'
import Next from '../component/Next'
import Footer from '../component/Footer'
import Point from '../component/Point'

function LandingPage() {
  return (
    <div>
        <Hero />
        <Financial />
        <Features />
        <Point />
        <Discover />
        <Next />
        <Footer />
    </div>
  )
}

export default LandingPage