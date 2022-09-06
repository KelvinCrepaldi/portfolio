import styled from "styled-components";

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
  .tech-card {
    flex-grow: 1;
    width: 150px;
    padding: 10px;
    margin: 5px;

    background-color: rgb(255, 255, 255, 0.2);
    font-size: 22px;
  }
  span {
    margin-left: 8px;
  }
`;
