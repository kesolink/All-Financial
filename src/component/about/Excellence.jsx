import React from 'react'
import "./Excellence.scss"
import award from '../../assets/award.png'
function Excellence() {
  return (
    <div className='excellence-container'>
        <div className="left">
            <img src={award} alt="" />
        </div>
        <div className="right">
            <header>20+ Years of Industry Excellence</header>
            <p>A timeline or milestones highlighting achievements, e.g., "Launched in 2004," "Integrated with 50+ banks," "Supported multi-currency and omni-channel systems since 2015."</p>
        </div>

    </div>
  )
}

export default Excellence