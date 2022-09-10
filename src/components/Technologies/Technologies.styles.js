import styled from "styled-components";

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
  padding: 20px;
  .tech-card {
    flex-grow: 1;
    width: 150px;
    padding: 10px;
    margin: 5px;

    background-color: rgb(255, 255, 255, 0.2);
    font-size: 22px;
  }
  .top-message {
    margin-bottom: 20px;
    width: 100%;
  }
  .card-span {
    margin-left: 8px;
  }
`;
