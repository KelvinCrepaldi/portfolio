import styled from "styled-components";

export const Container = styled.div`
  margin: 15px;
  width: 100%;
  max-width: 1000px;
  padding: 10px;
  padding-bottom: 20px;
  flex-grow: 1;
  background-color: rgb(0, 0, 0, 0.2);
  .title {
    width: 100%;
    display: flex;
    color: white;

    span {
      width: 25px;
      height: 25px;
      font-size: 20px;
      color: rgb(100, 100, 250);
    }

    h1 {
      display: flex;
      align-items: flex-end;
      margin: 5px;
      font-weight: bold;
    }
  }
  .line {
    flex-grow: 1;
    border-bottom: 1px solid white;
    margin: 10px 5px;
  }
`;
