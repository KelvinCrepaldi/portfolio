import styled from "styled-components";
export const AboutMeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  p {
    margin: 30px 10px;
    text-align: center;
    font-size: 16px;
    color: white;
  }

  img {
    width: 80%;
    max-width: 350px;
    margin: 20px;
    background-color: rgb(0, 0, 0, 0.1);
    border-radius: 10px;
    box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.1);
    margin: 5px;
  }

  span {
    display: block;
    text-align: center;
  }

  .final-message {
    width: 300px;
    font-size: 16px;
    color: rgb(255, 255, 255, 0.7);
    letter-spacing: 6px;
    margin: 60px 0 10px 0;
  }
`;
