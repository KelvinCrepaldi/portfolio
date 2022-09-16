import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 200px;
  height: 40px;

  color: var(--title-homepage);
  border-color: var(--title-homepage);
  border-radius: 10px;
  background-color: transparent;
  font-family: var(--font-pro);
  font-size: 16px;
  font-weight: 700;
  transition: 0.3s;

  span {
    margin: 5px;
  }

  :hover {
    background-color: rgb(0, 0, 0, 0.5);
    transform: scale(1.05);
  }
  :active {
    background-color: rgb(0, 0, 0, 1);
    transition: 0.1s;
    transform: translateY(3px);
  }
`;
