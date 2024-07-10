import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div id="search">Search</div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Index</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
