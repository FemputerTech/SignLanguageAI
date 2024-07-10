import React from "react";
import "../styles/Sidebar.css";
import { Categories, Favorites } from "./SidebarData";
// import { Scrollbars } from "react-custom-scrollbars-2";

function Sidebar() {
  return (
    <div id="sidebar">
      <div id="logo">Logo</div>
      <div id="favorites">
        <div class="sidebar-section">Favorites</div>
        <ul id="favorites-list" class="sidebar-list">
          {Favorites.map(
            (value, key) => {
              return (
                <li
                  className="item"
                  id={window.location.pathname === value.link ? "active" : ""}
                  key={key}
                  onClick={() => {
                    window.location.pathname = value.link;
                  }}
                >
                  <div className="sidebar-icon">{value.icon}</div>
                  <div className="sidebar-title">{value.title}</div>
                </li>
              );
            }
          )}
        </ul>
      </div>
      <div id="categories">
        <div class="sidebar-section">Categories</div>
        <ul id="categories-list" class="sidebar-list">
          {Categories.map(
            (value, key) => {
              return (
                <li
                  className="item"
                  id={window.location.pathname === value.link ? "active" : ""}
                  key={key}
                  onClick={() => {
                    window.location.pathname = value.link;
                  }}
                >
                  <div className="sidebar-icon">{value.icon}</div>
                  <div className="sidebar-title">{value.title}</div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
