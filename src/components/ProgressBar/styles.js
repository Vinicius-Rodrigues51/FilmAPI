import styled from "styled-components";

export const ProgressBars = styled.div`
  position: relative;
  height: 68px;
  width: 68px;
  background-color: #204529;
  border-radius: 50%;
  display: grid;
  place-items: center;

  &::before {
    content: "";
    position: absolute;
    height: 84%;
    width: 84%;
    background-color: #081c22;
    border-radius: 50%;
  }

  .value-container {
    position: relative;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    z-index: 3;
  }

  .value {
    position: relative;
    &::after {
      content: "%";
      position: absolute;
      font-size: 10px;
      top: 3px;
    }
  }
`;
