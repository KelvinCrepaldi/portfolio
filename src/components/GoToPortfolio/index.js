import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { GoToPortfolioContainer } from "./GoToPortfolio.styles";
import { Link } from "react-router-dom";

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
          <button>
            <FontAwesomeIcon icon={faDiagramProject} />
            <span>Portfólio</span>
          </button>
        </Link>
      </div>
    </GoToPortfolioContainer>
  );
};

export default GoToPortfolio;
