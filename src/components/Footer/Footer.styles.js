import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100px;
  margin-top: 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(14, 14, 14, 0.9) 10%,
    rgba(9, 11, 32, 0.9) 100%
  );
  justify-content: center;
  align-content: center;

  span {
    width: 100%;
    text-align: center;
    margin: 5px;
    color: #ffffff80;
  }
`;
