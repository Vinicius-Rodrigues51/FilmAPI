import styled from "styled-components";

export const Container = styled.div`
  max-width: 1820px;
  /* background-image: url("https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg"); */
  background-position: 0% 200px;
  background-size: 1400px;
  background-repeat: no-repeat;
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
    /* max-width: 1820px; */
    /*  */
    overflow-x: auto;
    display: flex;
    gap: 20px;
    margin: 20px 0;
    padding: 0 10px;
    position: relative;
    background-image: url("https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg");
    background-position: 0% 160px;
    background-size: 1400px;
    background-repeat: repeat-x;

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
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #e3e3e3;
    transition: opacity linear 0.9s;
  }

  .castIMG {
    width: 150px;
    height: 225px;
    background-color: rgb(224, 224, 224);
    border-radius: 6px;
    position: relative;

    img {
      width: 100%;
      border-radius: 6px;
    }
  }

  .castDet {
    margin: 20px 10px;
    font-size: 16px;

    a {
      display: inline-block;
    }

    h3 {
      font-weight: bold;
      font-size: 16px;
      color: ${(props) => props.theme.colors.text};

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

  .column_header {
    padding-right: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;

    h1 {
      margin-right: 10px;
    }
  }

  .selector {
    align-items: stretch;
    border: 1px solid rgba(3, 37, 65, 1);
    border-radius: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;

    h3 a {
      color: rgba(3, 37, 65, 1);
      transition: -webkit-text-fill-color 0.5s;
      color: rgba(3, 37, 65, 1);
    }
  }

  .anchor {
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
    cursor: pointer;

    h3 {
      font-size: 1em;
      padding: 4px 20px;
      margin-bottom: 0;
      white-space: nowrap;
    }
  }

  .selected {
    background-color: #032541;
    border-radius: 30px;
  }

  .selected h3 a {
    background: linear-gradient(to right, #c0fecf 0, #1ed5a9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
