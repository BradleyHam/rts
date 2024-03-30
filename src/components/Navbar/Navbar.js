import React, { useState, useEffect, useRef } from 'react';
import './navbar.scss';
import logo from '../../assets/images/RTS Logo (1).png';
import { FaChevronRight } from "react-icons/fa6";
import serviceData from '@/pages/Service/servicesData';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaTimes, FaBars } from "react-icons/fa";


const Navbar = ({ setCurrentPage, setCurrentService }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [submenuIsOpen, setSubmenuIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isProductPage = location.pathname.includes('/products');
  const submenuRef = useRef();

  const toggleSubmenu = () => {
    setSubmenuIsOpen(!submenuIsOpen);
  };

  const closeSubmenu = () => {
    setSubmenuIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (submenuRef.current && !submenuRef.current.contains(event.target)) {
      closeSubmenu();
    }
  };

  useEffect(() => {
    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);
    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigateToSection = (hash, event) => {
    event.preventDefault();

    // Close the submenu explicitly
    closeSubmenu();

    // For smooth scrolling and navigation
    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll to element
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      // Navigate if we're not already on the homepage
      navigate('/').then(() => {
        // Wait for navigation to complete then scroll to the element
        setTimeout(() => {
          const scrollToElement = document.getElementById(id);
          if (scrollToElement) {
            scrollToElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      });
    }
  };

  return (
    <nav>
    <div className='logo-container'>
      <Link to='./'>
        <img onClick={() => navigate('/')} id='logo' src={logo} alt="Logo" />
      </Link>
    </div>
  
    <div id='hamburger' onClick={() => setNavIsOpen(!navIsOpen)}>
      {navIsOpen ? <FaTimes size={24} color='white' /> : <FaBars size={24} color='white'/>}
    </div>
  
    <div className={`nav-text ${navIsOpen ? '' : 'hideNav'}`}>
      <ul className='nav-menu'>
        <Link to='/' onClick={closeSubmenu}>
          <li onClick={ () => setNavIsOpen(false)} className={!isProductPage ? 'nav-item-bold' : 'nav-item'}>Home</li>
        </Link>
        {!isProductPage && (
          <>
            <li ref={submenuRef} onClick={toggleSubmenu} className="has-submenu">
              Services
              <FaChevronRight className='chevron' />
              {submenuIsOpen && (
                <ul className='submenu'>
                  {Object.values(serviceData).map((service, index) => (
                   <li key={service.id || index} className='service-item' onClick={(e) => {
                    navigateToSection(`#${service.serviceNameCamelCase}`, e);
                    setNavIsOpen(false); // This will close the navigation menu
                  }}>
                    {service.serviceName}
                  </li>
                  ))}
                </ul>
              )}
            </li>
            <li onClick={(e) => {
                navigateToSection("#contact", e)
                setNavIsOpen(false);
            }}>
              Contact
            </li>
          </>
        )}
        <Link to="/products" onClick={closeSubmenu}>
          <li onClick={ () => setNavIsOpen(false)} className={isProductPage ? 'nav-item-bold' : 'nav-item'}>Products</li>
        </Link>
      </ul>
    </div>
  </nav>
  
  );
};

export default Navbar;



// import React, { useState, useEffect, useRef } from 'react';
// import './navbar.scss';
// import logo from '../../assets/images/RTS Logo (1).png';
// import { FaChevronRight } from "react-icons/fa6";
// import serviceData from '@/pages/Service/servicesData';
// import { Link, useLocation, useNavigate } from 'react-router-dom'; // Assuming React Router v6

// const Navbar = ({ setCurrentPage, setCurrentService }) => {
//   const [navIsOpen, setNavIsOpen] = useState(false);
//   const [submenuIsOpen, setSubmenuIsOpen] = useState(false);
//   const navigate = useNavigate(); // For programmatically navigating
//   const location = useLocation();
//   const isProductPage = location.pathname.includes('/products');
//   const submenuRef = useRef();

//   const closeSubmenu = () => {
//     setSubmenuIsOpen(false);
//   };

//   const handleClickOutside = (event) => {
//     if (submenuRef.current && !submenuRef.current.contains(event.target)) {
//       let className = event.target.className || "";
//       let parentClassName = event.target.parentNode.className || "";
      
//       if (className.baseVal !== undefined) {
//         className = className.baseVal;
//       }
//       if (parentClassName.baseVal !== undefined) {
//         parentClassName = parentClassName.baseVal;
//       }
      
//       if (!className.includes('service-item') && !parentClassName.includes('service-item')) {
//         setSubmenuIsOpen(false);
//       }
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const navigateToSection = (hash, event) => {
//     // Stop event propagation to prevent triggering handleClickOutside
//     if (event) {
//       event.stopPropagation();
//       event.preventDefault();
//     }
  
//     // Close the submenu
//     closeSubmenu();
  
//     // Navigate if not just a hash change (more applicable if using hashes for navigation on the same page)
//     if (location.pathname !== '/') {
//       navigate('/' + hash);
//     } else {
//       window.location.hash = hash;
//     }
//   };
  


//   return (
//     <nav>
//       <div className='logo-container'>
//         <img onClick={() => setCurrentPage('home')} id='logo' src={logo} alt="Logo" />
//       </div>
//       <div className={`nav-text ${navIsOpen ? '' : 'hideNav'}`}>
//         <ul className='nav-menu'>
//           <Link to='/' onClick={closeSubmenu}>
//             <li className={!isProductPage ? 'nav-item-bold' : 'nav-item'}>Home</li>
//           </Link>
//           {!isProductPage && (
//             <>
//               <li ref={submenuRef} onClick={() => setSubmenuIsOpen(!submenuIsOpen)} className="has-submenu">
//                 Services
//                 <div className='chevron'><FaChevronRight /></div>
//                 {submenuIsOpen && (
//                   <ul className='submenu'>
//                   {Object.values(serviceData).map((service, index) => (
//                     <li key={service.id || index} className='service-item' onClick={(e) => navigateToSection(`#${service.serviceNameCamelCase}`, e)}>
//                       {service.serviceName}
//                     </li>
//                   ))}
//                 </ul>
                
//                 )}
//               </li>
//               <li onClick={() => navigateToSection("#contact")}>
//                 Contact
//               </li>
//             </>
//           )}
//           <Link to="/products" onClick={closeSubmenu}> 
//             <li className={isProductPage ? 'nav-item-bold' : 'nav-item'}>Products</li>
//           </Link>
//         </ul>
//       </div>
//       <div id='hamburger' onClick={() => setNavIsOpen(!navIsOpen)}>
//         <svg width="24px" height="24px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
//           <g clipPath="url(#clip0_429_11066)">
//             <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//           </g>
//           <defs>
//             <clipPath id="clip0_429_11066">
//               <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"/>
//             </clipPath>
//           </defs>
//         </svg>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
