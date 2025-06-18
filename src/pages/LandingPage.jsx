import React from 'react'
import Hero from '../component/Hero'
import Financial from '../component/Financial'
import Features from '../component/Features'
import Discover from '../component/Discover'
import Next from '../component/Next'
import Footer from '../component/Footer'
import Point from '../component/Point'
import Client from '../component/Client'
import Testimony from '../component/Testimony'
import WhySection from '../component/WhySection'
import Partners from '../component/Partners'

function LandingPage() {
  return (
    <div>
        <Hero />
        <Financial />
        <Features />
        <Point />
        {/* <WhySection /> */}
        <Discover />
        <Client />
        <Partners />
        <Testimony />
        <Next />
        <Footer />
    </div>
  )
}

export default LandingPage