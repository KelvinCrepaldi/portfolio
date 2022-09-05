import styled from "styled-components";
export const AboutMeContainer = styled.div`
  color: white;

  .title {
    width: 100%;
    display: flex;
    margin-bottom: 30px;

    span {
      width: 25px;
      height: 25px;
      background-color: green;
      margin: 5px;
    }

    h1 {
      display: flex;
      align-items: flex-end;
      margin: 5px;
    }
  }
  .line {
    flex-grow: 1;
    border-bottom: 1px solid white;
    margin: 10px 5px;
  }

  p {
    margin: 5px;
    text-align: center;
    font-size: 16px;
  }
  img {
    width: 100%;
    margin: 20px 0;
  }
  span {
    display: block;
    text-align: center;
  }
`;
