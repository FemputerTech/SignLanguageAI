import React, { useState } from "react";
import "../styles/Sidebar.css";
import { Categories, Favorites } from "./SidebarData";
// import { Scrollbars } from "react-custom-scrollbars-2";

function Sidebar({ onLetterClick, onFavoriteClick }) {
  const [activeFavorite, setActiveFavorite] = useState("");
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
      <div id="logo"></div>
      <div id="favorites">
        <div className="sidebar-section nunito-sans-regular">Favorites</div>
        <ul id="favorites-list" className="sidebar-list">
          {Favorites.map((value, key) => {
            return (
              <li
                className="item"
                id={activeFavorite === value.title ? "active" : ""}
                key={key}
                onClick={() => {
                  handleFavoriteClick(value.title.toLowerCase());
                }}
              >
                <div className="sidebar-icon">{value.icon}</div>
                <div className="sidebar-title nunito-sans-regular">
                  {value.title}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div id="categories">
        <div className="sidebar-section nunito-sans-regular">Categories</div>
        <ul id="categories-list" className="sidebar-list">
          {Categories.map((value, key) => {
            return (
              <li
                className="item"
                id={activeCategory === value.title ? "active" : ""}
                key={key}
                onClick={() => {
                  // setActiveCategory(value.title);
                  handleLetterClick(value.title.toLowerCase());
                }}
              >
                <div className="sidebar-icon">{value.icon}</div>
                <div className="sidebar-title nunito-sans-regular">
                  {value.title}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
