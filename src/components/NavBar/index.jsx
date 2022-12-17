import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faHouse, faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { NavBarContainer } from "./NavBar.styles";
import { useState } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const handleActiveMenu = () => {
    setMenu(!menu);
  };
  return (
    <NavBarContainer>
      <button className={`nav-button`} onClick={handleActiveMenu}>
        {menu ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>

      <ul className={!menu ? "menu-close" : ""} onClick={handleActiveMenu}>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
            <span>Homepage</span>
          </Link>
        </li>
        <li>
          <Link to="/Portfolio">
            <FontAwesomeIcon icon={faDiagramProject} />
            <span>Portfolio</span>
          </Link>
        </li>
      </ul>
    </NavBarContainer>
  );
};

export default NavBar;
