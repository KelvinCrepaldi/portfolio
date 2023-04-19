import styled from "styled-components";

export const Container = styled.section`
  max-width: 90vw;
  width: 100%;
  margin: 10px;
  padding: 10px;
  background-color: #07070780;
  box-shadow: 1px 1px 2px inset #1b181d;
  h1 {
    color: var(--h1-containter-content-color);
  }

  p {
    color: var(--p-color);
    margin: 30px 20px;
    text-align: center;
    font-size: 18px;
  }
  .title {
    width: 100%;
    display: flex;
    color: white;

    span {
      font-size: 24px;
      color: rgb(100, 100, 250);
    }

    h1 {
      display: flex;
      align-items: flex-end;
      margin: 5px;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .line {
    flex-grow: 1;
    border-bottom: 1px solid rgb(255, 255, 255, 0.2);
    margin: 10px 5px;
  }
`;
