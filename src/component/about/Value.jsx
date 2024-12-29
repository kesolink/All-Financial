import React from 'react'
import "./Value.scss"
import bulb_1 from "../../assets/bulb 1.png"
import bulb_2 from "../../assets/bulb 2.png"
import bulb_3 from "../../assets/bulb 3.png"
function Value() {
  return (
    <div className='value-container'>
        <div className="value-main">
        <span className='header'>Our Values</span>
        <div className="value-wrap">
            <div className="box">
            <div className="img-wrap">
                <img src={bulb_1} alt="" />
                </div>
                <p> <strong>Innovation:</strong> Constantly improving to meet evolving financial needs.</p>
            </div>
            <div className="box">
                <div className="img-wrap">
                <img src={bulb_2} alt="" />
                </div>
                
                <p> <strong>Innovation:</strong> Constantly improving to meet evolving financial needs.</p>
            </div>
            <div className="box">
            <div className="img-wrap">
                <img src={bulb_3} alt="" />
                </div>
                <p> <strong>Innovation:</strong>  Constantly improving to meet evolving financial needs.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Value