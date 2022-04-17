import styled from "styled-components";

export const SearchContainer = styled.div`
  margin: 0 auto;
  background: #fff;

  .searchBar {
    background: #fff;
    border-radius: 5px;
    display: flex;
    width: 1320px;
    margin: 0 auto;
    height: 50px;
    align-items: center;

    input {
      width: 100%;
      border: none;
      border-radius: 5px;
      padding: 2px 5px;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.6);
      font-style: italic;

      &::placeholder {
        font-size: 18px;
      }

      &:focus {
        border: none;
        outline: none;
      }
    }

    button {
      background: transparent;
      border: none;
      padding-right: 10px;
      cursor: pointer;
      align-items: center;
      height: 100%;
      padding: 2px 5px;
    }
  }
`;

export const ContainerItems = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  max-width: 1360px;
  margin: 0 auto;
  padding-top: 30px;

  .searchBoard {
    border-radius: 8px;
    height: 270px;
    margin-right: 20px;
    border: 1px solid rgb(227, 227, 227);

    h1 {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      font-size: 20px;
      padding: 20px 0;
      background-color: rgb(1, 180, 228);
      font-weight: 600;
      color: #fff;
      text-align: center;
    }
    ul li {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;

      &:hover {
        background: rgba(0, 0, 0, 0.08);
        span {
          background: ${(props) => props.theme.colors.backgorund};
        }
      }

      span {
        background-color: rgba(0, 0, 0, 0.08);
        display: inline-flex;
        align-items: center;
        font-weight: 300;
        background-color: rgba(0, 0, 0, 0.08);
        padding: 0px 10px;
        border-radius: 8px;
      }
    }

    .selected {
      background: rgba(0, 0, 0, 0.08);
      span {
        background: ${(props) => props.theme.colors.backgorund};
      }
    }
  }
`;

export const FilmCard = styled.div`
  h1 {
    margin-bottom: 20px;
  }

  .seasonCard {
    margin-bottom: 20px;

    width: 100%;
    border: 1px solid rgb(227, 227, 227);
    box-shadow: 0 2px 8px rgb(0, 0, 0, 10%);
    border-radius: 8px;
    display: flex;

    .image {
      border-top-left-radius: 7px;
      border-bottom-left-radius: 7px;
      width: 100px;
      height: 141px;
      background-color: #dbdbdb;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }

    .details {
      width: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        font-size: 20px;
        font-weight: 600;
        color: ${(props) => props.theme.colors.text};
      }

      h3 {
        color: #999;
        font-size: 18px;
      }

      p {
        margin-top: 10px;
        font-size: 16px;
        color: ${(props) => props.theme.colors.text};
      }
    }
  }
`;
