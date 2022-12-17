import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;

  margin-right: 30px;

  ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    top: 70px;
    right: 0px;
    height: 100vh;
    width: 250px;

    background-color: rgb(0, 0, 0, 0.9);
    transition: 0.3s;
    opacity: 1;
  }

  ul li {
    display: flex;
    margin: 20px;
  }

  ul li a {
    display: flex;
    padding: 20px;
    font-size: 20px;
    width: 100%;

    text-decoration: none;
    color: var(--sub-title-homepage);
    transition: 0.3s;
  }

  ul li a:hover {
    color: var(--title-homepage);
    transform: translateY(-4px);
  }

  ul li a span {
    margin: 0px 10px;
  }

  .menu-close {
    right: -250px;
    opacity: 0;
  }

  .nav-button {
    width: 60px;
    height: 60px;
    margin: 5px;
    font-size: 50px;
    background: none;
    border: none;
    color: var(--sub-title-homepage);
  }

  @media only screen and (min-width: 875px) {
    .nav-button {
      display: none;
    }

    ul {
      position: static;
      flex-direction: row;
      align-items: center;
      margin-right: 20px;
      width: initial;
      height: initial;
      background-color: initial;
    }

    ul li {
      margin: 0px;
    }
    ul li a {
      margin: 5px;
    }

    .menu-close {
      opacity: initial;
      transform: initial;
    }
  }
`;
