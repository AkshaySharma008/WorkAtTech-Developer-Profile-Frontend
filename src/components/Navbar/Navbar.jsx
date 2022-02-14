import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="" className="logo-a">
        <label className="logo">The Developer Profile</label>
      </Link>
      <div className="header-menu">
        <Link to="/">
          <label
            className={`menu-option`}
          >
            All Developers
          </label>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;