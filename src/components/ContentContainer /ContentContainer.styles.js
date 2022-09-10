import styled from "styled-components";

export const Container = styled.div`
  margin: 15px;
  min-height: 90%;
  width: 100vw;

  padding: 10px;
  padding-bottom: 20px;

  background-color: var(--transparent-container-black);

  .title {
    width: 100%;
    display: flex;
    margin-bottom: 25px;
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
