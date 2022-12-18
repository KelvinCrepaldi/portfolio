import { PortfolioContainer } from "./Portfolio.styles";
import ContentContainer from "../../components/ContentContainer";
import ProjectCard from "../../components/ProjetcCard";
import imgProjects from "../../assets/imgprojects.svg";
import { motion } from "framer-motion";

import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { projectsData } from "../../database/techs";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ContentContainer title="Portfólio" icon={faDiagramProject}>
          <div className="projects-apresentation">
            <img src={imgProjects} />
            <div>
              <p>
                Criei alguns projetos, páginas e APIs durante meu tempo como
                programador, com o objetivo de sempre melhorar. Aqui estão
                alguns deles...
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
      </motion.div>
    </PortfolioContainer>
  );
};

export default Portfolio;
