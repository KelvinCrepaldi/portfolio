import { ButtonContainer } from "./Button.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Button = ({ icon, children, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      {icon && <FontAwesomeIcon icon={icon}></FontAwesomeIcon>}
      <span>{children}</span>
    </ButtonContainer>
  );
};

export default Button;
