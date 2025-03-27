import React from 'react'
import "./Mission.scss"
import mission from "../../assets/Mask group.png"
function Mission() {
  return (
    <div className='mission-cointainer'>
        <div className="mission-main">
            <div className="left">
                <div className="wrap">
                  <header> Mission</header>
                   <p>To empower financial institutions with cutting-edge tools and technologies that simplify operations, enhance security, and deliver exceptional value to their customers.</p>
                </div>
                <div className="wrap">
                  <header> Vision</header>
                   <p>To become a foremost go-to in Core-banking solution  for financial services providers.</p>
                </div>
            </div>
            <div className="right">
                <img src={mission} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Mission