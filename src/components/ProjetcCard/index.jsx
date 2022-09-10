import { ProjectCardContainer } from "./ProjectCard";
const ProjectCard = ({ project }) => {
  return (
    <ProjectCardContainer>
      {project.title}
      <img src={project.img_print}></img>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
