import { ContactContainer } from "./Contact.styles";
import ContentContainer from "../../components/ContentContainer ";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <ContactContainer>
      <ContentContainer title="Contato" icon={faEnvelope}>
        Portfolio content
      </ContentContainer>
    </ContactContainer>
  );
};

export default Contact;
