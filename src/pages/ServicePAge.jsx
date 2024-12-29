import React from 'react'
import Footer from '../component/Footer'
import ServiceHero from '../component/service/ServiceHero'
import Core from '../component/service/Core'
import Savings from '../component/service/Savings'
import Compliant from '../component/service/Compliant'
import Digital from '../component/service/Digital'
import Decisions from '../component/service/Decisions'
import Build from '../component/service/Build'
import Elevate from '../component/service/Elevate'
function ServicePAge() {
  return (
    <div>
      <ServiceHero />
      <Core />
      <Savings />
      {/* <Compliant /> */}
      <Digital />
      <Decisions />
      <Build />
      <Elevate />
      <Footer />
      

    </div>
  )
}

export default ServicePAge