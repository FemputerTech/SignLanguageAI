import React, { useState } from "react";
import { Categories, Favorites } from "./SidebarData";
import Logo from "../assets/Logo.svg";
import "../styles/Sidebar.css";

function Sidebar({ onLetterClick, onFavoriteClick }) {
  const [activeCategory, setActiveCategory] = useState("");

  // Passing the letter to the parent component
  const handleLetterClick = (letter) => {
    if (onLetterClick) {
      onLetterClick(letter);
    }
  };

  // Passing the favorite to the parent component
  const handleFavoriteClick = (fav) => {
    if (onFavoriteClick) {
      onFavoriteClick(fav);
    }
  };

  return (
    <div id="sidebar">
      <div id="logo">
        <img src={Logo} style={{ width: "110px" }} alt="Sign AI" />
      </div>
      <div id="favorites">
        <div className="sidebar-section">Favorites</div>
        <ul id="favorites-list" className="sidebar-list">
          {Favorites.map((value, key) => {
            return (
              <li
                className="item"
                key={key}
                onClick={() => {
                  handleFavoriteClick(value.title.toLowerCase());
                }}
              >
                <div className="sidebar-icon">{value.icon}</div>
                <div className="sidebar-title">{value.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div id="categories">
        <div className="sidebar-section">Categories</div>
        <ul id="categories-list" className="sidebar-list">
          {Categories.map((value, key) => {
            return (
              <li
                className="item"
                id={activeCategory === value.title ? "active" : ""}
                key={key}
                onClick={() => {
                  setActiveCategory(value.title);
                  handleLetterClick(value.title.toLowerCase());
                }}
              >
                <div className="sidebar-icon">{value.icon}</div>
                <div className="sidebar-title">{value.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
