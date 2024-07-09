import React from "react";
import "../styles/Sidebar.css";
import { SidebarData } from "./SidebarData";
import { Scrollbars } from "react-custom-scrollbars-2";

function Sidebar() {
  return (
    <Scrollbars style={{ width: 158 }}>
      <div className="Sidebar">
        <ul className="SidebarList">
          {SidebarData.map((value, key) => {
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
          })}
        </ul>
      </div>
    </Scrollbars>
  );
}

export default Sidebar;
