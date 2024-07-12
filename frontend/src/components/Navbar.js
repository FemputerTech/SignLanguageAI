import React from "react";
import Dark from "../assets/dark.svg";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div id="mode">
        <img class="mode-image" src={Dark} alt="Switch to dark mode" />
      </div>
      <ul>
        <li>
          <a className="nav-link nunito-sans-semibold" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link nunito-sans-semibold" href="/">
            Index
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
