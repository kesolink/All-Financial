import React from "react";
import "./Footer.scss";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
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
           <Link className="link" to="/"> <span>Home</span></Link>
           <Link className="link" to="/about"> <span>About us</span></Link>
           <Link className="link" to="/service"> <span>Services</span></Link>
           <Link className="link" to="/contact">  <span>Contact Us</span></Link>
          </div>
          
            <div className="list">
            <a className="link" href="mailto:All-Financial@dsgsgroup.com" > <span>Email</span></a>
            <a className="link" href="tel:+2348067432734"> <span>Phone</span></a>
            <a  className="link" href="https://g.co/kgs/BNQH8Kv" target="_blank" rel="noopener noreferrer"> <span>Address</span></a>
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
