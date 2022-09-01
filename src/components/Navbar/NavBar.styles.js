import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  width: 100vw;
  min-width: 375px;
  padding: 2px 0px;

  border-bottom: 1px solid black;
  list-style: none;

  ul {
    display: flex;
    padding-left: 20px;
  }

  li {
    padding: 10px 15px;
    margin: 0px 1px;
    border: 1px solid black;
  }
  a {
    text-decoration: none;
  }
`;
