import { PortfolioContainer } from "./Portfolio.styles";
import ContentContainer from "../../components/ContentContainer ";
import ProjectCard from "../../components/ProjetcCard";
import imgProjects from "../../assets/imgprojects.svg";

import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { projectsData } from "../../database/techs";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <ContentContainer title="Portfólio" icon={faDiagramProject}>
        <div className="projects-apresentation">
          <img src={imgProjects} />
          <div>
            <p>
              Criei alguns projetos, páginas e APIs durante meu tempo como
              programador, com o objetivo de sempre melhorar. Aqui estão alguns
              deles...
            </p>
            {/* <div className="tech-filter">
              <label>
                <select placeholder="Filtrar...">
                  <option className="option" value="" disabled selected>
                    Filtrar...
                  </option>
                  <option className="option" value="hurr">
                    Durr
                  </option>
                </select>
              </label>
            </div> */}
          </div>
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
