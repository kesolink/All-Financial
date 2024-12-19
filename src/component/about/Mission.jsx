import React from 'react'
import "./Mission.scss"
import mission from "../../assets/Mask group.png"
function Mission() {
  return (
    <div className='mission-cointainer'>
        <div className="mission-main">
            <div className="left">
                <header>Our Mission</header>
                <p>To empower financial institutions with cutting-edge tools and technologies that simplify operations, enhance security, and deliver exceptional value to their customers.</p>
            </div>
            <div className="right">
                <img src={mission} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Mission