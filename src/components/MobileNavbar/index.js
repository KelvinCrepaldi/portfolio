import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavBarButton, NavBarMobile } from "./NavBar.styles";
import { useState } from "react";

const MobileNavBar = () => {
  const [navState, setNavState] = useState(true);

  const handleOpenMenu = () => {
    setNavState(!navState);
  };

  return (
    <NavBarButton>
      <button onClick={handleOpenMenu}>
        {navState ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faXmark} />
        )}
      </button>
      {!navState && (
        <NavBarMobile>
          <ul onClick={handleOpenMenu}>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faBars} />
                <span>Homepage</span>
              </Link>
            </li>
            <li>
              <Link to="/Portfolio">
                <FontAwesomeIcon icon={faBars} />
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <FontAwesomeIcon icon={faBars} />
                <span>Contato</span>
              </Link>
            </li>
          </ul>
        </NavBarMobile>
      )}
    </NavBarButton>
  );
};

export default MobileNavBar;
