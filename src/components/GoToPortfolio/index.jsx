import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { GoToPortfolioContainer } from "./GoToPortfolio.styles";
import { Link } from "react-router-dom";
import Button from "../Button";

const GoToPortfolio = () => {
  return (
    <GoToPortfolioContainer>
      <div className="left-container">
        <div className="circle-container">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <span className="text">Veja alguns dos projetos que participei...</span>
      </div>

      <div className="center-button">
        <Link to="/Portfolio">
          <Button icon={faDiagramProject}>Portfólio</Button>
        </Link>
      </div>
    </GoToPortfolioContainer>
  );
};

export default GoToPortfolio;