import React from "react";
import "./Reach.scss";
import email from "../../assets/email 1.png"
import call from "../../assets/user-interface 1.png"
import place from "../../assets/placeholder 1.png"

function Reach() {
  return (
    <div className="reac-container">
        <header>Reach Us Directly</header>
      <div className="box-wrap">
        <div className="box">
          <img src={call} alt="" />
          <div className="wrap">
            <span>Phone</span>
            <p>+2348067432734</p>
          </div>
        </div>
        <div className="box">
          <img src={email} alt="" />
          <div className="wrap">
            <span>Email: </span>
            <p>allfinancialbanking@gmail.com</p>
          </div>
        </div>
        <div className="box">
          <img src={place} alt="" />
          <div className="wrap">
            <span>Address: </span>
            <p> 46, Akinsoji Street Fadeyi, Lagos- Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reach;
