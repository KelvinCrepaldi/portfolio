import styled from "styled-components";

export const SliderProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PrintFrame = styled.div`
  width: 300px;
  height: 200px;
  background: url(${(props) => props.background}) no-repeat top center;
  background-size: cover;
  margin: 0 auto;

  border: 1px solid rgb(50, 50, 50, 0.3);
  border-radius: 10px;
  background-color: rgb(50, 50, 50, 0.1);
`;

export const SliderCardComponent = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-style: none;
    text-decoration: none;
  }

  h3 {
    width: 100%;
    text-align: center;
    margin: 4px;
    color: white;
  }
`;
