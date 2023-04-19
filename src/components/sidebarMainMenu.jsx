import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import * as MdIcons from "react-icons/md/";
import SidebarSubMenu from "./sidebarSubMenu";

export default function SidebarMainMenu({ item, menuOpen }) {
  const [subMenuExpanded, setSubMenuExpanded] = useState(false);
  return (
    <li key={item.id}>
      <NavLink
        key={item.id}
        className={`menu-item ${menuOpen ? "" : "tooltip"}`}
        to={item.link}
        onClick={() => item.subitems && setSubMenuExpanded(!subMenuExpanded)}
      >
        <div className="menu-item-icon">{item.icon}</div>
        <span className={`menu-item-text ${menuOpen ? "" : "tooltiptext"}`}>
          {item.title}
        </span>
        {item.subitems && subMenuExpanded ? (
          <MdIcons.MdArrowDropUp className="menu-item-dropdown" />
        ) : item.subitems ? (
          <MdIcons.MdArrowDropDown className="menu-item-dropdown" />
        ) : null}
      </NavLink>
      {item.subitems && subMenuExpanded ? (
        <div className="submenu-container">
          <ul>
            {item.subitems.map((item) => {
              return <SidebarSubMenu key={item.id} item={item} menuOpen={menuOpen} />;
            })}
          </ul>
        </div>
      ) : null}
    </li>
  );
}
