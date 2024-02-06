import React, { useState } from 'react';
import './navbar.scss';
import logo from '../../assets/images/RTS Logo (1).png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <nav>
      <Link to="/"><img id='logo' src={logo} alt="Logo" /></Link>
      <div className={`nav-text ${navIsOpen ? '' : 'hideNav'}`}>
        <ul>
          <li className="has-submenu">
            <Link to="#">Services</Link>
            {/* Submenu commented out */}
          </li>
          <li><Link to="#">Products</Link></li>
          <li><Link to="#">Projects</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
      </div>
      <div id='hamburger' onClick={() => setNavIsOpen(!navIsOpen)}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_429_11066)">
            <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_429_11066">
              <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
