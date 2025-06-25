import React, { useState } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import logo from "./logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img className="img-logo" src={logo} alt="Logo" />
        </Link>

        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>

          <div className="nav-item dropdown">
            <span className="nav-link">Packages ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/packages" className="dropdown-item" onClick={closeMenu}>Domestic Tours</Link></li>
              <li><Link to="/packages/international" className="dropdown-item" onClick={closeMenu}>International Tours</Link></li>
              <li><Link to="/packages/weekendtrips" className="dropdown-item" onClick={closeMenu}>Weekend Trips</Link></li>
              <li><Link to="/packages/uttarakhand" className="dropdown-item" onClick={closeMenu}>Uttrakhand Tours</Link></li>
            </ul>
          </div>
          <div className="nav-item dropdown">
            <span className="nav-link">Destination▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/destination" className="dropdown-item" onClick={closeMenu}>Himachal Pradesh </Link></li>
              <li><Link to="/jammukashmeer" className="dropdown-item" onClick={closeMenu}>Jammu & Kashmeer</Link></li>
              <li><Link to="/punjab" className="dropdown-item" onClick={closeMenu}>Punjab</Link></li>
              <li><Link to="/haryana" className="dropdown-item" onClick={closeMenu}>Haryana</Link></li>
              <li><Link to="/goa" className="dropdown-item" onClick={closeMenu}>Goa</Link></li>
              <li><Link to="/gujarat" className="dropdown-item" onClick={closeMenu}>Gujarat</Link></li>
              <li><Link to="/haryana" className="dropdown-item" onClick={closeMenu}>Haryana</Link></li>
              <li><Link to="/himachal-pradesh" className="dropdown-item" onClick={closeMenu}>Himachal Pradesh</Link></li>
              <li><Link to="/kerala" className="dropdown-item" onClick={closeMenu}>Kerala</Link></li>
              <li><Link to="/madhya-pradesh" className="dropdown-item" onClick={closeMenu}>Madhya Pradesh</Link></li>
              <li><Link to="/rajasthan" className="dropdown-item" onClick={closeMenu}>Rajasthan</Link></li>
              <li><Link to="/sikkim" className="dropdown-item" onClick={closeMenu}>Sikkim</Link></li>
              <li><Link to="/uttar-pradesh" className="dropdown-item" onClick={closeMenu}>Uttar Pradesh</Link></li>
              <li><Link to="/uttarakhand" className="dropdown-item" onClick={closeMenu}>Uttarakhand</Link></li>
              <li><Link to="/west-bengal" className="dropdown-item" onClick={closeMenu}>West Bengal</Link></li>
              <li><Link to="/delhi" className="dropdown-item" onClick={closeMenu}>Delhi</Link></li>
            </ul>
          </div>

          {/* <Link to="/destination" className="nav-link" onClick={closeMenu}>Destination</Link> */}
          <Link to="/festival" className="nav-link" onClick={closeMenu}>Festival</Link>
          <Link to="/blog" className="nav-link" onClick={closeMenu}>Blog</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
