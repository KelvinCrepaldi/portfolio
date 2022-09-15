import styled from "styled-components";

export const GoToPortfolioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 30px;

  .left-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .circle-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 35px;
    margin-right: 10px;
  }

  .circle {
    width: 10px;
    height: 10px;
    margin: 1px;

    background: #ffffff4d;
    border-radius: 40px;
  }

  .text {
    flex-grow: 1;
    font-size: 20px;
    color: white;
    flex-grow: 1;
    text-align: center;
    padding: 10px;
  }

  .center-button {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  button {
    width: 250px;
    height: 50px;
    border: none;
    background-color: rgb(0, 0, 0, 0.5);
    color: white;
    border-radius: 15px;
    margin: 20px;
    font-size: 16px;
  }
  button span {
    margin-left: 10px;
  }
`;
