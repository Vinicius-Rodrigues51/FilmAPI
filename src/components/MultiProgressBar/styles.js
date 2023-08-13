import styled from "styled-components";

export const ProgressBars = styled.div`
  position: absolute;
  bottom: -18px;
  left: 10px;
  height: 38px;
  width: 38px;
  background-color: #204529;
  border-radius: 50%;
  display: grid;
  place-items: center;

  &::before {
    content: "";
    position: absolute;
    height: 86%;
    width: 86%;
    background-color: #081c22;
    border-radius: 50%;
  }

  .value-container {
    position: relative;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    z-index: 3;
  }

  .value {
    /* position: relative; */
    &::after {
      content: "%";
      position: relative;
      font-size: 8px;
      top: -6px;
      font-weight: bold;
    }
  }
`;
