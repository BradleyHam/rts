import React, { useState } from 'react';
import './navbar.scss';
import logo from '../../assets/images/RTS Logo (1).png';
import { FaChevronRight } from "react-icons/fa6";

import serviceData from '@/pages/Service/servicesData';



const Navbar = ({setCurrentPage, setCurrentService}) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [submenuIsOpen, setSubmenuIsOpen] = useState(false);

  const handleServicePageSelect = (e) => {
    console.log(e)
      setCurrentService(e.target.innerText);
      setCurrentPage('service');
  }

  return (
    <nav>
      <div className='logo-container'>
     <img onClick={() => setCurrentPage('home')} id='logo' src={logo} alt="Logo" />
     </div>
      <div className={`nav-text ${navIsOpen ? '' : 'hideNav'}`}>
        <ul className='nav-menu'>
        <li>Home</li>
          <li onClick={() => {setSubmenuIsOpen(!submenuIsOpen)}} className="has-submenu">
            <p>Services 
              
            </p>
            <div className='chevron'>
                 <FaChevronRight />
               </div>

           {
          submenuIsOpen && (
            <ul className='submenu'>
              {serviceData.map((service, index) => (
                <li key={service.id || index} onClick={(e) => handleServicePageSelect(e)} className='service-item'>
                  {service.serviceName}
                </li>
              ))}
         
            </ul>
          )
        }
            {/* serviceData.map((service) => {<li>service name</li>}) */}
            {/* <ul id='serviceSubmenu' class='serviceSubmenu'>
              <li onClick={updateServicePage}>Acid Washing</li>
              <li onClick={updateServicePage}>Efflorescence Removal</li>
            </ul> */}
          </li>
          <li>Products</li>
          <li>Projects</li>
          <li>Contact</li>
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
