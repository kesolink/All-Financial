import React from "react";
import "./Footer.scss";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="list-wrap">
          <div className="list">
            <span className="finance">All-Financial</span>
          </div>

          <div className="split">
          <div className="list">
           <Link className="link" to="/"> <span>Home</span></Link>
           <Link className="link" to="/about"> <span>About us</span></Link>
           <Link className="link" to="/service"> <span>Services</span></Link>
           <Link className="link" to="/contact">  <span>Contact Us</span></Link>
          </div>
          
            <div className="list">
            <a className="link" href="mailto:allfinancialbanking@gmail.com" > <span>Email</span></a>
            <a className="link" href="tel:+2348067432734"> <span>Phone</span></a>
            <a  className="link" href="https://g.co/kgs/BNQH8Kv" target="_blank" rel="noopener noreferrer"> <span>Address</span></a>
            </div>
            <div className="list">
            <a href="https://www.linkedin.com/company/105357132/admin/dashboard/"><span>Linkden</span></a>
            <a href="https://x.com/allfincbanking"><span>Twitter</span></a>
            <a href="https://www.instagram.com/allfincbanking/profilecard/?igsh=MWsxdDJ2ODFjM2w3Nw=="><span>Instagram</span></a>
            </div>
          </div>
          <div className="list-for-email">
            {/* <div className="email-wrap">
              <input type="text" placeholder="Email address" />{" "}
              <span>Send</span>
            </div> */}
            <div className="icon-wrap">
              
              {/* <FaFacebookSquare className="icon"  /> */}
              <a href="https://www.instagram.com/allfincbanking/profilecard/?igsh=MWsxdDJ2ODFjM2w3Nw=="><FaInstagram className="icon"/></a>
              <a href="https://www.linkedin.com/company/105357132/admin/dashboard/"><FaLinkedin className="icon" /></a>
              <a href="https://x.com/allfincbanking"><FaSquareXTwitter className="icon" /></a>
            </div>
          </div>
        </div>
        <hr />
        <p className="copy-right">© 2024 All-Financial. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
