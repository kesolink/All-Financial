import React, { useState } from 'react';
import './Navbar.scss';
import logo1 from '../../assets/favicon.png';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from "react-icons/rx";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);



  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const closeToggle = ()=>{
    setMenuOpen(false)
  }
 

  return (
    <div className="nav-container">
      <Link to="/">
        <div className="logo-wrap">
          <img src={logo1} alt="Logo" />
          <span className="wrap-fianancail">
            <span className="all">All-Financial</span>
            <span>Efficiency and Productivity</span>
          </span>
        </div>
      </Link>

      {menuOpen ? (
        <RxCross2 className="hamburger" onClick={toggleMenu} />
      ) : (
        <GiHamburgerMenu className="hamburger" onClick={toggleMenu} />
      )}

      {/* Navigation Links */}
      <div className={`wrap ${menuOpen ? "open" : ""}`}>
        <Link onClick={closeToggle} to="/">
          <span>Home</span>
        </Link>
        <Link onClick={closeToggle} to="./about">
          <span>About Us</span>
        </Link>
        <Link onClick={closeToggle} to="./service">
          <span>Services</span>
        </Link>
        <Link onClick={closeToggle} to="/contact">
          <span>Contact Us</span>
        </Link>
        <Link to="/contact#emailbox">
          {" "}
          <button onClick={closeToggle}>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
