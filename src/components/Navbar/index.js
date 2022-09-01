import { Link } from "react-router-dom";
import { NavBarContainer } from "./NavBar.styles";
const NavBar = () => {
  return (
    <NavBarContainer>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="portfolio">
          <li>Portfólio</li>
        </Link>
        <Link to="/articles">
          <li>Artigos</li>
        </Link>
        <Link to="/contact">
          <li>Contato</li>
        </Link>
      </ul>
    </NavBarContainer>
  );
};

export default NavBar;
