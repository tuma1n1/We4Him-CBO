import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <img 
          src="/we4him_Logo_Xbg.png" 
          alt="WE4HIM CBO Logo" 
          className="logo-image" 
        />
      </Link>

      <div 
        className={`hamburger ${menuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        ☰
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/programmes" onClick={closeMenu}>Programmes</Link></li>
        <li><Link to="/news" onClick={closeMenu}>News & Events</Link></li>
        <li><Link to="/get-involved" onClick={closeMenu}>Get Involved</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
