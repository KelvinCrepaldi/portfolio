import { Link } from "react-router-dom";
import { NavBarButton, buttonDraw } from "./NavBar.styles";
const NavBar = () => {
  return (
    <NavBarButton>
      <button>
        <div className="buttonDraw" />
        <div className="buttonDraw" />
        <div className="buttonDraw" />
      </button>
    </NavBarButton>
  );
};

export default NavBar;
