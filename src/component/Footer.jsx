import React from "react";
import "./Footer.scss";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="list-wrap">
          <div className="list">
            <span>All Financial</span>
          </div>
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
          <div className="list-for-email">
            <div className="email-wrap">
              <input type="text" placeholder="Email address" />{" "}
              <span>sign-up</span>
            </div>
            <div className="icon-wrap">
              <FaFacebookSquare size={20} />
              <FaLinkedin size={20} />
              <FaTwitterSquare size={20} />
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
