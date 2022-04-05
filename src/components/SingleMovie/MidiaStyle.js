import styled from "styled-components";

export const MidiaStyle = styled.div`
  border-top: 1px solid #d7d7d7;
  border-bottom: 1px solid #d7d7d7;
  max-width: 1320px;
  margin: 0 auto;
  padding: 30px 0;

  &::-webkit-scrollbar-thumb {
    background-color: rgb(227, 227, 227);
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  .midiaTitles {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    h2 {
      margin-right: 50px;
    }

    h3 {
      margin-right: 30px;
      cursor: pointer;
      position: relative;

      &::after {
        content: "";
        width: 0%;
        height: 3px;
        background: ${(props) => props.theme.colors.text};
        position: absolute;
        bottom: -8px;
        left: 0;
        border-radius: 4px;
        transition: width 0.3s ease;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }

    .active {
      &::after {
        width: 100%;
      }
    }
  }

  .populares {
    display: none;
    width: 100%;

    .img {
      width: 50%;
      img {
        width: 100%;
        height: 392px;
      }
    }

    .trailer {
      width: 50%;
    }
  }

  .videos {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    display: none;

    &::-webkit-scrollbar {
      height: 8px;
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-color: rgb(219, 219, 219);
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }

  .show {
    display: flex;
  }
`;
