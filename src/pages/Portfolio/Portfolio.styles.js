import styled from "styled-components";

export const PortfolioContainer = styled.div`
  display: flex;

  .projects-apresentation {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    border-bottom: 1px solid #ffffff33;
  }

  .projects-apresentation img {
    width: 60%;
  }

  .projects-apresentation p {
    margin: 20px;
    font-size: 20px;
    color: #ffffffa9;
  }

  .tech-filter {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .tech-filter select {
    margin: 10px;

    width: 200px;
    height: 30px;
    color: #696969;

    border: 1px solid #ffffff17;
    border-radius: 5px;
    background: rgb(0, 0, 0, 0.3);
    box-shadow: 0px 0px 5px #000000ec;
  }

  .option {
    font-size: 20px;
  }

  .projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 20px 0;
  }

  @media only screen and (min-width: 875px) {
    .projects-apresentation {
      flex-direction: row;
    }
  }
`;
