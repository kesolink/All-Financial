import React from 'react'
import "./Core.scss"
import img1 from "../../assets/idea 1.png"
import img2 from "../../assets/handshake 1.png"
import img3 from "../../assets/expert 1.png"
function Core() {

  return (
    <div className='core-container'>
        <div className="discover-wrap">
            <div className="left">
            <span>Banking Operations Suite</span>
            <header>Streamlined Core Banking Solutions</header>
            </div>
            <div className="right">
                <div className="big-box">
                </div>
                <div className="small-box-wrap  core-one">
                    <div className="img-wrap">
                    <img src={img1} alt="" />
                    </div>
                    <div className="wrap">
                        <span>Past Due Management: </span>
                        <p> Efficiently track and collect customer's overdue payment.</p>
                    </div>
                </div>
                <div className="small-box-wrap  core-two">
                    <div className="img-wrap">
                    <img src={img2} alt="" />
                    </div>
                    <div className="wrap">
                        <span>Multi Tenancy:</span>
                        <p>  MULTI-TENANT and INTERBRANCH Functionality</p>
                    </div>
                </div>
                
                <div className="small-box-wrap  core-three">
                    <div className="img-wrap">
                    <img src={img3} alt="" />
                    </div>
                    <div className="wrap">
                        <span> EASILY CREATE YOUR OWN PRODUCT: </span>
                        <p> Quick product creation and speedy go-to market</p>
                    </div>
                    
                </div>
                <div className="small-box-wrap  core-four">
                    <div className="img-wrap">
                    <img src={img1} alt="" />
                    </div>
                    <div className="wrap">
                        <span>Database Accessibility: </span>
                        <p> Access and manage your data anytime and independently</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Core