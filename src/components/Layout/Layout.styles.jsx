import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;

  .content-page {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
  }
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 50px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: fixed;
  top: 0;

  background: rgb(0, 0, 0, 0.6);
  color: var(--top-title);
  box-shadow: 0px -3px 5px inset black;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .title {
    font-size: 16px;
    margin: 0 20px;
    color: var(--title-homepage);
  }

  @media only screen and (min-width: 875px) {
    height: 60px;
    .title {
      font-size: 26px;
    }
  }
`;
