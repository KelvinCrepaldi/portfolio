import { PortfolioContainer } from "./Portfolio.styles";
import ProjectCard from "../../components/ProjetcCard";

import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

import { projectsData } from "../../database/techs";

import ContentContainer from "../../components/ContentContainer ";
const Portfolio = () => {
  return (
    <PortfolioContainer>
      <ContentContainer title="Portfólio" icon={faDiagramProject}>
        <div className="tech-filter">
          <label>
            <select placeholder="Filtrar...">
              <option className="option" value="" disabled selected>
                Filtrar...
              </option>
              <option className="option" value="hurr">
                Durr
              </option>
              <option className="option" value="hurr">
                Durr
              </option>
              <option className="option" value="hurr">
                Durr
              </option>
              <option className="option" value="hurr">
                Durr
              </option>
            </select>
          </label>
        </div>
        <div className="projects-container">
          {projectsData.map((project) => {
            return <ProjectCard project={project}></ProjectCard>;
          })}
        </div>
      </ContentContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;
