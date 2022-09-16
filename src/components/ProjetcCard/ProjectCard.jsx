import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  display: flex;

  padding: 10px;
  margin: 10px 5px;

  color: rgb(255, 255, 255, 0.6);
  background: linear-gradient(
    145deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );

  border-left: 7px solid rgb(0, 0, 0, 0.3);
  border-radius: 10px;

  img {
    width: 90%;
    max-width: 500px;
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
    font-size: 32px;
    font-weight: bold;
  }

  .info-text p {
    font-size: 16px;
    padding: 20px;
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
`;
