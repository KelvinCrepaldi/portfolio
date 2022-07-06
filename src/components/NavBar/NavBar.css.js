import styled from "styled-components";
export const Container = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  height: 60px;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(14, 14, 15, 0.9);
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

  .title {
    margin: 10px 5px 10px 60px;
    font-size: 30px;
    color: #ffff;
  }

  .list {
    display: flex;
    align-items: flex-end;

    margin-right: 100px;
    height: 100%;

    list-style: none;
  }

  .list li {
    display: flex;

    height: 50%;
    padding: 10px;

    color: #ffff;
    font-size: 20px;
  }

  .list li:hover {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 3px solid white;

    background-color: rgb(255, 255, 255, 20%);
    transition: 0.3s;
  }
`;
