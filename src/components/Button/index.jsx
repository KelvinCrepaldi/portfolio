import { ButtonContainer } from "./Button.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Button = ({ ...props }) => {
  return (
    <ButtonContainer>
      <FontAwesomeIcon></FontAwesomeIcon>
    </ButtonContainer>
  );
};

export default Button;
