import React from 'react'
import "./Compliant.scss"
import img1 from '../../assets/wallet 1.png'
import img2 from '../../assets/kyc 1.png'
function Compliant() {
  return (
    <div className='compliant-container'>
        <div className="compliant-main">
            <span>Compliance and Security</span>
            <p>Stay Compliant with Confidence</p>
            <div className="box-wrap">
                <div>hello kesolink</div>
                <div className="box">
                    <div className="img-wrap">
                        <img src={img1} alt="" />
                    </div>
                    <p> <strong>Anti-Money Laundering Tools:</strong> Robust systems to prevent financial crimes</p>

                </div>
                <div className="box">
                    <div className="img-wrap">
                        <img src={img2} alt="" />
                    </div>
                    <p> <strong>Know Your Customer (KYC): </strong> Simplified customer onboarding and verification</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Compliant