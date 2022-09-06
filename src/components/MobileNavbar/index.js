import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavBarButton } from "./NavBar.styles";
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
    </NavBarButton>
  );
};

export default MobileNavBar;
