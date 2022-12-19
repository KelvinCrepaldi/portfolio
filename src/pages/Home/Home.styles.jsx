import styled from "styled-components";
import streetBackground from "../../assets/street_background.jpg";
export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  //========================= TITLE =======================

  .motion-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .apresentation-content {
    display: flex;
    flex-wrap: wrap;

    flex-direction: column;
    align-items: center;
  }

  .title-content {
    padding-top: 70px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: url(${streetBackground}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    min-height: 80vh;
    box-shadow: inset 0px 0px 10px 4px black;
    border-bottom: 3px solid black;
  }

  .title-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: calc(100% - 30px);
    padding: 15px;
    border-radius: 10px;

    span {
      text-align: center;
      text-shadow: 1px 1px 3px black;
    }
  }

  .name {
    margin: 0 10px;
    font-weight: bold;
    color: rgba(77, 84, 185, 1);
  }

  .title-content-top {
    width: 100%;
    text-align: center;
    font-size: 24px;
    color: var(--title-homepage);
  }
  .title-content-bottom {
    width: 100%;
    text-align: center;
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
    text-shadow: 2px 2px 5px #000000, 2px 2px 1px #000000;
    span {
      display: block;
      width: 320px;
      text-align: center;
      color: var(--title-homepage);
      margin-bottom: 20px;
    }

    span:last-child {
      font-weight: bold;
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

      .title-content-top {
        font-size: 34px;
      }
      .title-content-bottom {
        font-size: 28px;
      }
    }

    .title-content {
      margin: 0;
    }

    .welcome-message {
      span {
        width: 400px;
        font-size: 18px;
      }
    }
  }
`;
