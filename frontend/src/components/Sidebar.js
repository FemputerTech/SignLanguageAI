import React from "react";
import "../styles/Sidebar.css";
import { SidebarData } from "./SidebarData";
import { Scrollbars } from "react-custom-scrollbars-2";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="favoritesSidebar">
        <ul className="SidebarList">
          {SidebarData.filter((value) => value.section === "favorites").map(
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
                  <div id="icon">{value.icon}</div>
                  <div id="title">{value.title}</div>
                </li>
              );
            }
          )}
        </ul>
      </div>
      <div className="mainSidebar">
        <ul className="SidebarList">
          {SidebarData.filter((value) => value.section === "main").map(
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
                  <div id="icon">{value.icon}</div>
                  <div id="title">{value.title}</div>
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
