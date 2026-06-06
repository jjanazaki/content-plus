import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* Left */}
      <div className="nav-left">
        <div className="cart-icon">
          <FaShoppingCart />
          <span className="cart-count">3</span>
        </div>

        <div className="user-icon">
          <FaUser />
        </div>
      </div>

      {/* Center */}
      <div className="nav-center">
        <img src={logo} className="logo" alt="Logo" />
      </div>

      {/* Right */}
      <div className="nav-right">
        <FaSearch className="nav-icon" />

        <div className="menu-btn">
          <FaBars className="nav-icon" />
          <span>القائمة</span>
        </div>
      </div>

    </nav>
  );
}