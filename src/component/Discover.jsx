import React from 'react'
import "./Discover.scss"
import img1 from "../assets/idea 1.png"
import img2 from "../assets/handshake 1.png"
import img3 from "../assets/expert 1.png"
import { Link } from 'react-router-dom'

function Discover() {
  return (
    <div className='discover-container'>
        <div className="discover-wrap">
            <div className="left">
                <header>What Sets All <br /> Financial  Apart?</header>
                <Link to="/service"><button>Discover the All Financial Advantage</button></Link>
            </div>
            <div className="right">
                <div className="big-box">
                </div>
                <div className="small-box-wrap one">
                    <div className="img-wrap">
                    <img src={img1} alt="" />
                    </div>
                    <div className="wrap">
                        <span>20+ Years of Industry Experience:</span>
                        <p> Trusted by leading financial institutions globally.</p>
                    </div>
                </div>
                <div className="small-box-wrap two">
                    <div className="img-wrap">
                    <img src={img2} alt="" />
                    </div>
                    <div className="wrap">
                        <span>Seamless Integration with Legacy Systems:</span>
                        <p> Ensures a smooth transition and optimized operations.</p>
                    </div>
                </div>
                <div className="small-box-wrap three">
                    <div className="img-wrap">
                    <img src={img3} alt="" />
                    </div>
                    <div className="wrap">
                        <span> Multi-Tenancy and Cloud-Based Solutions:</span>
                        <p> Adaptable for businesses of any size and location.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discover