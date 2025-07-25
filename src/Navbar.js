

import React from "react";
import './Navbar.css'; 

function Navbar() {
  

  return (
    <nav className="navbar">
      <button className="nav-button">Login</button>
      <button className="nav-button" >Register</button>
      <button className="nav-button" >Service</button>
      <button className="nav-button" >Contact</button>
    </nav>
  );
}

export default Navbar;
