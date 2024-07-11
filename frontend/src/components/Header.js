import React from "react";
import "../styles/Header.css";

function Header({ imageURL }) {
  return (
    <div id="header">{imageURL && <img src={imageURL} alt="Selected" />}</div>
  );
}

export default Header;
