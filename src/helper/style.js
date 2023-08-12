import styled from "styled-components";

export const Loader = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 50px;
    height: 50px;
    border: 6px solid #e5e5e5;
    /* border-top-color: #c62e65; */
    border-top-color: rgb(3, 37, 65);
    border-radius: 50%;
    animation: rotate 1s infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
`;
