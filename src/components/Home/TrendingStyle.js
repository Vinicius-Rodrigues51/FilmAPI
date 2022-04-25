import styled from "styled-components";

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;

  margin-top: 30px;
  margin-bottom: 30px;

  &::-webkit-scrollbar-thumb {
    background-color: rgb(227, 227, 227);
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  .castSlider {
    width: 100%;
    overflow-x: auto;
    display: flex;
    gap: 20px;
    margin: 20px 0;
    padding: 0 10px;
    position: relative;

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

  .shadow {
    content: "";
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-image: linear-gradient(
      to right,
      transparent 0%,
      ${(props) => props.theme.colors.background} 100%
    );
    will-change: opacity;
    pointer-events: none;
    transition: opacity linear 0.3s;
  }

  .singleActor {
    width: 150px;
    margin-bottom: 20px;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    border-radius: 7px;
  }

  .castIMG {
    width: 150px;
    height: 225px;
    background-color: rgb(224, 224, 224);
    border-radius: 6px;

    img {
      width: 100%;
      border-radius: 6px;
    }
  }

  .castDet {
    margin: 10px;
    font-size: 16px;

    a {
      display: inline-block;
    }

    h3 {
      font-weight: bold;
      font-size: 16px;
      color: #333;

      &:hover {
        color: rgb(1, 180, 228);
      }
    }
  }

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 140px;
  }
`;
