import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">WE4HIM CBO</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/programmes">Programmes</Link></li>
        <li><Link to="/news">News & Events</Link></li>
        <li><Link to="/get-involved">Get Involved</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
