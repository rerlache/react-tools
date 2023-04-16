import { useEffect, useState } from "react";
import { SidebarData } from "./sidebarData";
import * as MdIcons from "react-icons/md/";
import "../styles/sidebar.css";
import SidebarMainMenu from "./sidebarMainMenu";

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
              <MdIcons.MdMenuOpen className="menu-toggle-icon" />
            ) : (
              <MdIcons.MdMenu className="menu-toggle-icon" />
            )}
          </div>
        </div>
        <div className="menu-container">
          <ul>
            {SidebarData.map((item, key) => {
              return (
                <SidebarMainMenu item={item} key={key} menuOpen={menuOpen} />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
