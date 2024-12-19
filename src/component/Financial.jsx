import React from "react";
import "./Financial.scss";
import frame1 from "../assets/Frame 10 - Copy.png";
import frame2 from "../assets/Frame 12.png";
import frame3 from "../assets/Frame 13.png";
function Financial() {
  return (
    <div className="Financail-container">
      <header>Why Choose All Financial?</header>
      <div className="box-wrapper">
        <div className="box">
          <img src={frame1} alt="" />
          <span>Secure and Reliable:</span>
          <p>
            Secure and Reliable: Advanced security features, including
            anti-money laundering tools.
          </p>
        </div>
        <div className="box">
          <img src={frame2} alt="" />
          <span>Scalable Solutions:</span>
          <p> Supports unlimited branches and multi-currency transactions.</p>
        </div>
        <div className="box">
          <img src={frame3} alt="" />
          <span>Comprehensive Functionality:</span>
          <p> Loans, deposits, CRM, KYC, and more</p>
        </div>
      </div>
      <div className="btn-wrap">
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default Financial;
