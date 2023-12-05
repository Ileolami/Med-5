import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaAlignJustify,FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-nav bar-contain">
      <header className="container mx-auto flex items-center justify-between p-4 font-Playfair text-white">
        <div className="flex items-center">
          <img src="logo.svg" alt="med5logo" />
        </div>
       
        <nav
          className={`md:flex ${
            isMenuOpen ? 'active' : ''
          } md:items-center md:w-auto nav-container`}
        >
          <ul className="md:flex flex-col md:flex-row md:space-x-4 md:w-auto menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hospitals">Hospitals</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="text-hover hover:text-font">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaAlignJustify />}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
