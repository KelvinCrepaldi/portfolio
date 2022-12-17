import styled from "styled-components";

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
  padding: 20px;

  .tech-card {
    display: flex;

    flex-grow: 1;
    width: 150px;
    padding: 10px;
    margin: 5px;

    cursor: default;
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.09584354575163401) 0%,
      rgba(0, 0, 0, 0.10237949346405228) 100%
    );
    font-size: 22px;
    transition: 3s;
    border: 1px solid transparent;
  }
  .tech-card:hover {
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.09584354575163401) 50%,
      #8b72fae6 100%
    );
    transition: 0.2s;
    border: 1px solid #8b72fae6;
  }
  .top-message {
    margin-bottom: 20px;
    width: 100%;
  }
  .card-span {
    margin-left: 8px;
  }
`;
