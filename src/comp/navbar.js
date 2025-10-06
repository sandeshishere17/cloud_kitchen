// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Cloud Kitchen</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/media">Media</Link></li>
        <li><Link to="/diwali">diawli special</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
