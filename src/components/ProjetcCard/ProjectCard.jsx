import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 10px;
  margin: 10px 5px;

  color: rgb(255, 255, 255, 0.6);
  background: linear-gradient(
    145deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );

  border-left: 3px solid rgb(0, 0, 0, 0.3);
  border-radius: 10px;
  box-shadow: 0px 0px 2px rgb(255, 255, 255, 0.6);

  img {
    width: 90%;
    max-width: 500px;
    margin: 20px;
    margin-bottom: 18px;

    box-shadow: 1px 1px 5px 2px black;
    border-radius: 5px;
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 100%;
    margin-top: 20px;
  }

  .info-text {
    text-align: center;
    width: 100%;
  }

  .info-text h1 {
    width: 100%;
    font-size: 32px;
    font-weight: bold;
  }

  .info-text p {
    font-size: 16px;
    padding: 5px;
  }

  .tech-container {
    display: flex;
    justify-content: center;

    width: fit-content;
    margin: 0 auto;
    padding: 0px;
  }

  .tech-container ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .tech-container ul li {
    margin: 5px;
    padding: 3px;
    border-bottom: 1px solid #6359f1d8;
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    width: 100%;

    button {
      width: 150px;
      margin: 20px;
    }
  }

  .icon-color {
    color: #6359f1d8;
  }

  @media only screen and (min-width: 900px) {
    .info {
      margin-bottom: 20px;
    }
    .info img {
      width: 50%;
    }

    .info-text {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      align-content: center;
      width: 40%;
      flex-grow: 1;
      padding: 20px;
    }
  }
`;
