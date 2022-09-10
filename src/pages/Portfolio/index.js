import { PortfolioContainer } from "./Portfolio.styles";
import ProjectCard from "../../components/ProjetcCard";

import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

import { projectsData } from "../../database/techs";

import ContentContainer from "../../components/ContentContainer ";
const Portfolio = () => {
  return (
    <PortfolioContainer>
      <ContentContainer title="Portfólio" icon={faDiagramProject}>
        {projectsData.map((project) => {
          return <ProjectCard project={project}></ProjectCard>;
        })}
      </ContentContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;
