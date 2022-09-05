import styled from "styled-components";
export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  //========================= TITLE =======================

  .title-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    min-height: 65vh;
  }

  .title-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 300px;
    padding: 15px;
    margin: 15vh 0px 25px 0px;
    border-radius: 10px;

    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 5%
    );

    span {
      width: 100%;
      text-align: center;
      height: auto;
    }
  }

  .title-content-top {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.8);
  }
  .title-content-bottom {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.6);
  }

  .button-home-container {
    button {
      width: 100px;
      height: 25px;
      margin: 0 10px;

      border-radius: 15px;
      border: none;
      background-color: rgb(0, 0, 0, 0.2);
      color: rgb(255, 255, 255, 0.8);
    }

    display: flex;
    justify-content: center;
  }

  .welcome-message {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: end;

    width: 100%;
    margin-top: 100px;

    span {
      display: block;
      width: 350px;
      text-align: center;
      font-size: 16px;
      color: rgb(255, 255, 255, 0.5);
      margin: 5px;
    }
  }
`;
