import React from 'react'

import Footer from '../component/Footer'
import ServiceHero from '../component/service/ServiceHero'
import Core from '../component/service/Core'
import Savings from '../component/service/Savings'
import Compliant from '../component/service/Compliant'
import Digital from '../component/service/Digital'
function ServicePAge() {
  return (
    <div>
      <ServiceHero />
      <Core />
      <Savings />
      <Compliant />
      <Digital />
      <Footer />

    </div>
  )
}

export default ServicePAge