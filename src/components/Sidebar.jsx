import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./sidebarData";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/sidebar.css";

export default function Sidebar(props) {
  const [menuOpen, setMenuOpen] = useState(props.expanded);

  useEffect(() => {
    props.isOpen(menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const isLandscape = window.innerWidth > window.innerHeight;
      setMenuOpen(isLandscape);
    };
    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  function handleSidebarToggle() {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <div className={`sidebar ${menuOpen ? "opened" : "closed"}`}>
        <div className="top-section">
          {menuOpen ? <div className="page-title">Tools</div> : ""}
          <div
            className={`toggle-menu-btn`}
            onClick={() => handleSidebarToggle()}
          >
            {menuOpen ? (
              <MenuOpenIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </div>
        </div>
        <div className="menu-container">
          <ul>
            {SidebarData.map((val, key) => {
              return (
                <li key={key}>
                  <NavLink
                    className={`menu-item ${menuOpen ? "" : "tooltip"}`}
                    to={val.link}
                  >
                    <div className="menu-item-icon">{val.icon}</div>
                    <span
                      className={`menu-item-text ${
                        menuOpen ? "" : "tooltiptext"
                      }`}
                    >
                      {val.title}
                    </span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
