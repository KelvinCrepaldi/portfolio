import { Container } from "./NavBar.css";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const title = "<KC />";
  return (
    <>
      <Container>
        <span class="title">{title}</span>
        <ul class="list">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/portfolio")}>Portfólio</li>
          <li onClick={() => navigate("/articles")}>Artigos</li>
          <li onClick={() => navigate("/contact")}>Contato</li>
        </ul>
      </Container>
    </>
  );
};
export default NavBar;
