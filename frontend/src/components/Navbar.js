import React from "react";
import Dark from "../assets/icons/Dark.svg";
import Light from "../assets/icons/Light.svg";
import "../styles/Navbar.css";

function Navbar({ mode, toggleMode }) {
  console.log(mode);
  return (
    <nav>
      <div id="mode">
        <img
          className="mode-image"
          src={mode === "dark" ? Dark : Light}
          alt="Switch to dark mode"
          onClick={toggleMode}
        />
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
