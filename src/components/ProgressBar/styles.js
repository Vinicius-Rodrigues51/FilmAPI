import styled from "styled-components";

export const ProgressBars = styled.div`
  position: relative;
  display: inline-block;
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
    font-size: 22px;
    font-weight: bold;
    z-index: 3;
  }

  .value {
    /* position: relative; */
    &::after {
      content: "%";
      position: relative;
      font-size: 13px;
      top: -6px;
      font-weight: bold;
    }
  }

  @media (max-width: 820px) {
    height: 44px;
    width: 44px;

    &::before {
      content: "";
      height: 88%;
      width: 88%;
    }

    .value-container {
      font-size: 20px;
    }

    .value {
      &::after {
        content: "%";
        font-size: 8px;
      }
    }
  }
`;
