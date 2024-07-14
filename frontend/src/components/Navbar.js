import React from "react";
import Dark from "../assets/dark.svg";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div id="mode">
        <img className="mode-image" src={Dark} alt="Switch to dark mode" />
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
