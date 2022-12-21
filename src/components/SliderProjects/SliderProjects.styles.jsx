import styled from "styled-components";

export const SliderProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .slick-initialized {
  }
  .slick-slider {
  }
`;

export const PrintFrame = styled.div`
  width: 300px;
  height: 200px;
  background: url(${(props) => props.background}) no-repeat top center;
  background-size: cover;
`;
