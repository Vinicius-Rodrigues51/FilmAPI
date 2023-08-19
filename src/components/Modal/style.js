import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  z-index: 1000;
  padding: 1.5rem calc(3rem + 15px) 1.5rem 3rem;

  .modalBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
  }

  .topBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: black;
    padding: 10px 10px;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
  }

  .xButton {
    padding: 6px;
    cursor: pointer;
    transition: background 0.3s ease;
    border-radius: 6px;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;
