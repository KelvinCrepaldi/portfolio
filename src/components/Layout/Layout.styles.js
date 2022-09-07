import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: 100vh;
`;

export const TopBlackContainer = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: fixed;

  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 70%,
    rgba(45, 23, 23, 0) 100%
  );
  color: var(--top-title);

  .title {
    font-size: 20px;
    margin: 20px;
  }
`;
