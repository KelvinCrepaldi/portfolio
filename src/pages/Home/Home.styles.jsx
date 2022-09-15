import styled from "styled-components";
export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  //========================= TITLE =======================

  .apresentation-content {
    display: flex;
    flex-wrap: wrap;

    flex-direction: column;
    align-items: center;
  }
  .me-img {
    margin: 30px;
    width: 60vw;
    max-width: 350px;
  }

  .title-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .title-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 300px;
    padding: 15px;
    border-radius: 10px;

    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 5%
    );

    span {
      width: auto;
      text-align: center;
      text-shadow: 1px 1px 3px black;
    }
  }

  .name {
    margin: 0 6px;
  }

  .title-content-top {
    display: flex;
    font-size: 24px;
    color: var(--title-homepage);
  }
  .title-content-bottom {
    font-size: 20px;
    color: var(--sub-title-homepage);
  }

  .social-links {
    display: flex;
    justify-content: center;

    a {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 50px;
      margin: 10px;
      padding: 10px;
      width: 60px;
      height: 60px;
      color: var(--title-homepage);
      border: 1px solid var(--sub-title-homepage);
      box-shadow: 1px 1px 5px black;
      border-radius: 50px;
      text-align: center;
      background-color: rgb(0, 0, 0, 0.2);
      transition: 0.3s;
    }
    a:hover {
      background-color: rgb(0, 0, 0, 0.6);
      transform: scale(1.2);
    }
  }

  .welcome-message {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 60px 0 20px 0;
    width: 100%;
    text-shadow: 1px 1px 2px black;

    span {
      display: block;
      width: 320px;
      text-align: center;
      font-size: 16px;
      color: var(--title-homepage);
    }
  }

  @media only screen and (min-width: 875px) {
    .apresentation-content {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .me-img {
      margin-top: 60px;
    }

    .title-container {
      flex-direction: column;
      background: none;
      width: 100%;
      align-items: center;
      padding: 0;
      padding-bottom: 15px;

      span {
        font-size: 32px;
      }
    }

    .title-content {
      margin: 0;
    }

    .welcome-message {
      span {
        width: 400px;
        font-size: 18px;
        margin: 0;
      }
    }
  }
`;