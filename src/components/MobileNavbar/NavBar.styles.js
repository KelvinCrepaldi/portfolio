import styled from "styled-components";

export const NavBarButton = styled.div`
  button {
    width: 40px;
    height: 40px;

    margin: 5px 10px;
    padding: 0px;

    border: none;
    background: none;
    color: white;
    font-size: 36px;
  }

  button:focus {
    color: rgb(200, 200, 255);
  }
`;

export const NavBarMobile = styled.nav`
  position: fixed;
  top: 50px;
  right: 0;

  background-color: rgb(0, 0, 0, 0.9);
  border-left: 7px solid rgb(0, 0, 0, 0.9);
  border-bottom-left-radius: 10px;

  ul {
    width: 100%;
    height: 100vh;
  }

  ul li {
    display: flex;
    justify-content: ce;
    width: 200px;
    height: 60px;
    margin: 20px;
    background: linear-gradient(
      180deg,
      rgba(48, 48, 48, 0.9) 50%,
      rgba(14, 14, 14, 0.9) 51%
    );
    border-bottom: 10px inset solid black;

    border-radius: 10px;
  }

  ul li:hover {
    background: linear-gradient(
      180deg,
      rgba(60, 60, 60, 1) 50%,
      rgba(30, 30, 30, 1) 51%
    );
  }

  ul li a {
    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;
    padding-left: 15px;

    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-shadow: 0px 0px 10px #464646;
  }

  ul li a span {
    padding-left: 20px;
  }
`;
