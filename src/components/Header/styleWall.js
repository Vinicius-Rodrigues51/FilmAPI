import styled from "styled-components";

export const NavWall = styled.div`
  background: rgba(3, 37, 65, 0.9);
  width: 85%;
  height: calc(100vh - 60px);
  position: fixed;
  left: -85%;
  z-index: 999;
  backdrop-filter: blur(20px);
  padding: 20px;
  transition: 0.4s ease;

  .active {
    left: 0;
  }

  li {
    font-size: 1.2em;
    color: #fff;
    padding-bottom: 10px;
    font-weight: 600;
  }
`;
