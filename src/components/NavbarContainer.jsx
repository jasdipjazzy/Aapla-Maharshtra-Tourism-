import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../cssfiles/Navbar.css";

const NavbarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <h4
          style={{ color: "red" }}
          className="animate__animated animate__backInRight"
        >
          आपला
        </h4>
        <h4
          style={{ color: "orange", marginLeft: "50px" }}
          className="animate__animated animate__bounce animate__backInLeft"
        >
          महाराष्ट्र
        </h4>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/touristplace">Tourist Place</Link>
        </li>
        <li>
          <Link to="/hillstation">Hill Station</Link>
        </li>
        <li>
          <Link to="/beaches">Beaches</Link>
        </li>
        <li>
          <Link to="/temples">Temples</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="hamburger-menu">
        <button
          className="hamburger-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="dropdown-menu">
            <Link to="/adminlogin" onClick={() => setIsOpen(false)}>
              Admin Login
            </Link>
            <Link to="/adminregister" onClick={() => setIsOpen(false)}>
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarContainer;
