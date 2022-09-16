import Button from "../Button";
import { ProjectCardContainer } from "./ProjectCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMicrochip, faDesktop } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
  return (
    <ProjectCardContainer>
      <div>
        <div className="info">
          <img src={project.img_print} alt="Project print"></img>
          <div className="info-text">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
        </div>
        <div className="tech-container">
          <ul>
            <FontAwesomeIcon icon={faMicrochip} className="icon-color" />
            {project.techs.map((element) => {
              return <li>{element}</li>;
            })}
          </ul>
        </div>
        <div className="buttons-container">
          <a href={project.repo_url} target="_blank" rel="noreferrer">
            <Button icon={faGithub}>Repo ></Button>
          </a>
          <a href={project.demo_url} target="_blank" rel="noreferrer">
            <Button icon={faDesktop}>Demo ></Button>
          </a>
        </div>
      </div>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
