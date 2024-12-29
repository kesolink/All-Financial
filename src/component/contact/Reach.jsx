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
            <p>+234-456-7890</p>
          </div>
        </div>
        <div className="box">
          <img src={email} alt="" />
          <div className="wrap">
            <span>Email: </span>
            <p>support@allfinancial.com</p>
          </div>
        </div>
        <div className="box">
          <img src={place} alt="" />
          <div className="wrap">
            <span>Address: </span>
            <p> 123 Finance Street, Cityname, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reach;
