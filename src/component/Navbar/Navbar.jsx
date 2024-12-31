import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import logo from '../../assets/logomian.png';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);



  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const closeToggle = ()=>{
    setMenuOpen(false)
  }
  console.log(menuOpen)

  return (
    <div className="nav-container">
      <div className="logo-wrap">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger Icon */}
      {/* <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div> */}
      <GiHamburgerMenu className="hamburger" onClick={toggleMenu}/>

      {/* Navigation Links */}
      <div className={`wrap ${menuOpen ? 'open' : ''}`}>
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
        {/* <AnchorLink href='#emailbox'> <button onClick={closeToggle}>Get Started</button></AnchorLink> */}
        <Link to='/contact#emailbox'> <button onClick={closeToggle}>Get Started</button></Link>
        
      </div>
    </div>
  );
}

export default Navbar;
