import styled from "styled-components";
export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  //========================= TITLE =======================

  .top-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .me-img {
    display: block;
    margin: 30px;
    border: 3px solid white;
    width: 50%;
    border-radius: 1000px;
    object-fit: cover;
  }

  .title-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    min-height: 70vh;
  }

  .title-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 300px;
    padding: 15px;
    border-radius: 10px;

    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 5%
    );

    span {
      width: auto;
      text-align: center;
    }
  }

  .name {
    margin: 0 6px;
  }

  .title-content-top {
    display: flex;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.8);
  }
  .title-content-bottom {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.6);
  }

  .button-home-container {
    button {
      width: 120px;
      height: 35px;
      margin: 0 10px;

      border-radius: 15px;
      border: none;
      background-color: rgb(0, 0, 0, 0.2);
      color: rgb(255, 255, 255, 0.8);
    }
    button:focus {
      background-color: rgb(100, 100, 100, 0.5);
    }

    button span {
      margin: 5px;
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
      width: 320px;
      text-align: center;
      font-size: 16px;
      color: rgb(255, 255, 255, 0.5);
      margin-top: 10px;
    }
  }

  @media only screen and (min-width: 875px) {
    .welcome-message {
      span {
        width: 400px;
        font-size: 18px;
      }
    }
  }
`;
