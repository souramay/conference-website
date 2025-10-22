import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  // Define links in an array to avoid repetition (DRY principle)
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Author', path: '/author' },
    { name: 'Registration', path: '/registration' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Committee', path: '/commitee' }, // Corrected spelling
    { name: 'Archive', path: '/archieve' }, // Corrected spelling
    { name: 'Travel', path: '/travel' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="navbar bg-base-300 shadow-md fixed top-0 z-20">
      
      
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">ICCAN 2019</Link>
      </div>




      

      {/* 2. Desktop Menu (Hidden on mobile) */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
          ))}
        </ul>
      </div>






      {/* 3. Mobile Menu (Dropdown - Hidden on large screens) */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          
          {/* Dropdown Content */}
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
            {navLinks.map((link) => (
              // Increased text size for better mobile readability
              <li key={link.name} className="text-base">
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;