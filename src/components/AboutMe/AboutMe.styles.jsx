import styled from "styled-components";
export const AboutMeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  p {
  }

  img {
    width: 50%;
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

  .total-width-space {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .final-message {
    width: 300px;
    font-size: 16px;
    color: rgb(255, 255, 255, 0.7);
    letter-spacing: 6px;
    margin: 60px 0 10px 0;
  }

  .content-block {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .bottom-img {
    width: 90%;
    max-width: 450px;
  }

  @media only screen and (min-width: 875px) {
    margin: 30px;
    .content-block {
      flex-wrap: nowrap;
      align-items: center;
    }

    .second-block {
      flex-direction: row-reverse;
    }

    p {
      font-size: 20px;
    }

    .final-message {
      font-size: 24px;
    }

    img {
      width: 40%;
      max-width: unset;
      margin: 35px;
    }

    .bottom-img {
      max-width: 700px;
    }
  }
`;
