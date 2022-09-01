import styled from "styled-components";
export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .first-content {
    height: 70vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .title-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    min-width: 300px;
    max-width: 400px;
    height: 76px;
    padding: 10px;
    margin: 20px;
    border-radius: 20px;

    background: linear-gradient(
        270deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0) 49.93%
      ),
      linear-gradient(
        90deg,
        rgba(217, 217, 217, 0.06) 0.01%,
        rgba(217, 217, 217, 0) 100%
      );
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  }

  .title-content-one {
    width: 100%;
    font-size: 22px;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
  }
  .title-content-two {
    width: 100%;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
  }

  button {
    width: 100px;
    height: 25px;
    margin: 10px;

    border-radius: 15px;
    border: none;
    background-color: rgb(0, 0, 0, 0.2);
    color: rgb(255, 255, 255, 0.8);
  }
`;
