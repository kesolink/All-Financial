import React from 'react'
import "./Features.scss"
import laptob from "../assets/laptobimg.png"

function Features() {
  return (
    <div className='features-container'>
        <header>Powerful Features to Elevate Your Banking Experience</header>
        <div className="feature-wrap">
        <div className="left">
            <img src={laptob} alt="" />
        </div>
        <div className="right">
            <div className="list-wrap">
            <div className="dot-wrap">
                <span className='dot'></span>
                </div>
                <div className="text-wrap">
                <span>Maker-Checker Functionality:</span>    Ensure secure and efficient transaction approvals.
                </div>
            </div>
            <div className="list-wrap">
            <div className="dot-wrap">
                <span className='dot'></span>
                </div>
                <div className="text-wrap">
                <span>Multi-Currency Support:</span>   Handle multiple currencies effortlessly.
                </div>
            </div>
            <div className="list-wrap">
            <div className="dot-wrap">
                <span className='dot'></span>
                </div>
                <div className="text-wrap">
                <span>Automated Loan Management:</span> Simplify loan tracking and repayments.
                </div>
            </div>
            <div className="list-wrap">
                <div className="dot-wrap">
                <span className='dot'></span>
                </div>
                
                <div className="text-wrap">
                <span>Anti-Money Laundering Tools:</span>  Robust tools to comply with regulatory standards.
                </div>
            </div>
            <div className="list-wrap">
            <div className="dot-wrap">
                <span className='dot'></span>
                </div>
                <div className="text-wrap">
                <span>Unlimited Branches Capability:</span>  Scale your banking operations with ease.
                </div>
            </div>
            <button>Learn More Abouit Our ADvanced Features</button>
        </div>
        </div>
    </div>
  )
}

export default Features