import React, { useState } from "react";
import "../styles/Sidebar.css";
import { Categories, Favorites } from "./SidebarData";
// import { Scrollbars } from "react-custom-scrollbars-2";

function Sidebar({ onLetterClick }) {
  const [activeFavorite, setActiveFavorite] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  // Passing the imageURL to the parent component
  const handleLetterClick = (letter) => {
    if (onLetterClick) {
      onLetterClick(letter);
    }
  };

  return (
    <div id="sidebar">
      <div id="logo">Logo</div>
      <div id="favorites">
        <div className="sidebar-section">Favorites</div>
        <ul id="favorites-list" className="sidebar-list">
          {Favorites.map((value, key) => {
            return (
              <li
                className="item"
                id={activeFavorite === value.title ? "active" : ""}
                key={key}
                onClick={() => {
                  setActiveFavorite(value.title);
                  // window.location.pathname = value.link;
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
                  // window.location.pathname = value.link;
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
