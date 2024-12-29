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
                        <span>Accounts Management: </span>
                        <p> Handle customer accounts with precision.</p>
                    </div>
                </div>
                <div className="small-box-wrap  core-two">
                    <div className="img-wrap">
                    <img src={img2} alt="" />
                    </div>
                    <div className="wrap">
                        <span>Deposits:</span>
                        <p> Simplify deposits and withdrawals.</p>
                    </div>
                </div>
                
                <div className="small-box-wrap  core-three">
                    <div className="img-wrap">
                    <img src={img3} alt="" />
                    </div>
                    <div className="wrap">
                        <span> Teller Systems: </span>
                        <p> Efficient teller operations for smooth customer interactions.</p>
                    </div>
                    
                </div>
                <div className="small-box-wrap  core-four">
                    <div className="img-wrap">
                    <img src={img1} alt="" />
                    </div>
                    <div className="wrap">
                        <span>Loans & Mortgages: </span>
                        <p> Advanced loan tracking and repayment features.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Core