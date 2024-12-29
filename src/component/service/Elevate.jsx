import React from 'react'
import "./Elevate.scss"
import img from '../../assets/elevate.png'
function Elevate() {
  return (
    <div className='elevate-container'>
        <span className='top'>Value-Added Features</span>
        <header>Additional Tools to Elevate Banking</header>
        <div className="feature-wrap">
        <div className="left">
            <img src={img} alt="" />
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
            
        </div>
        </div>
    </div>
  )
}

export default Elevate