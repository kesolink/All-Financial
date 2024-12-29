import React from "react";
import "./Footer.scss";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="list-wrap">
          <div className="list">
            <span className="finance">All Financial</span>
          </div>

          <div className="split">
          <div className="list">
            <span>Home</span>
            <span>About us</span>
            <span>Services</span>
            <span>Contact Us</span>
          </div>
          
            <div className="list">
              <span>Email</span>
              <span>Phone</span>
              <span>Address</span>
            </div>
            <div className="list">
              <span>Linkden</span>
              <span>Twitter</span>
              <span>Facebook</span>
            </div>
          </div>
          <div className="list-for-email">
            {/* <div className="email-wrap">
              <input type="text" placeholder="Email address" />{" "}
              <span>Send</span>
            </div> */}
            <div className="icon-wrap">
              
              <FaFacebookSquare className="icon"  />
              <FaLinkedin className="icon" />
              <FaTwitterSquare className="icon" />
            </div>
          </div>
        </div>
        <hr />
        <p className="copy-right">© 2024 All Financial. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
