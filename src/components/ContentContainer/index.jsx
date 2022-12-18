import { Container } from "./ContentContainer.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentContainer = ({ icon, title, children }) => {
  return (
    <Container>
      {title && (
        <div className="title">
          <span>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
          </span>
          <h1>{title}</h1>
          <div className="line"></div>
        </div>
      )}

      {children}
    </Container>
  );
};

export default ContentContainer;
