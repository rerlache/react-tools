import { NavLink } from "react-router-dom";
import React from "react";

export default function SidebarSubMenu({ item, key, menuOpen }) {
  return (
    <li key={key}>
      <NavLink to={item.link} className="submenu-item">
        <div className="submenu-item-icon">{item.icon}</div>
        <span className={`submenu-item-text ${menuOpen ? "" : "tooltiptext"}`}>
          {item.title}
        </span>
      </NavLink>
    </li>
  );
}
