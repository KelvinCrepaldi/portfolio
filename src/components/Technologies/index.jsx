import { TechnologiesContainer } from "./Technologies.styles";
import { techsData } from "../../database/techs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Technologies = () => {
  return (
    <TechnologiesContainer>
      <span className="top-message">
        Algumas habilidades e tecnologias que tenho trabalhado...{" "}
      </span>
      {techsData.map((element) => {
        return (
          <div className="tech-card">
            <FontAwesomeIcon icon={element.icon} />
            <span className="card-span">{element.name}</span>
          </div>
        );
      })}
    </TechnologiesContainer>
  );
};

export default Technologies;
