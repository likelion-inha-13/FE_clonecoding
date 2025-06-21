import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_left">
          <h1 className="header_logo">📷 Pocket Album </h1>
          </div>
        <ul className="header_menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
