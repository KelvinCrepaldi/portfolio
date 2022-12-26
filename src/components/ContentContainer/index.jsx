import { Container } from "./ContentContainer.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ContentContainer = ({ icon, title, children }) => {
  useEffect(() => {
    ScrollReveal().reveal(".container-reveal", { delay: 100 });
  }, []);
  return (
    <Container className="container-reveal">
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
