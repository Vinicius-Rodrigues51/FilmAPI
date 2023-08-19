import styled from "styled-components";

export const SeasonStyled = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 30px 0;

  h1 {
    margin-bottom: 20px;
  }

  .seasonCard {
    width: 100%;
    border: 1px solid rgb(227, 227, 227);
    box-shadow: 0 2px 8px rgb(0, 0, 0, 10%);
    border-radius: 8px;
    display: flex;

    .image {
      border-top-left-radius: 7px;
      border-bottom-left-radius: 7px;
      width: 130px;
      height: 195px;
      img {
        width: 130px;
        height: 195px;
        border-top-left-radius: 7px;
        border-bottom-left-radius: 7px;
      }
    }

    .details {
      width: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2,
      h3 {
        font-weight: bold;
        font-size: 16px;
      }

      p {
        margin-top: 30px;
      }

      .titleOne {
        font-size: 18px;
        margin-bottom: 5px;
      }

      .wrapper {
        display: flex;
      }

      .detailWrap {
        display: flex;
        padding: 1px 8px 1px 6px;
        margin-right: 8px;
        font-weight: 600px;
        justify-content: center;
        border-color: #000;
        font-size: 0.8em;
        align-items: center;
        border-radius: 8px;
        border-width: 0;
        color: #fff;
        background-color: #000;
      }

      .star {
        padding: 1px 8px;
        margin-right: 2px;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        top: 0;
        left: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 1em;
        min-height: 1em;
        width: 1em;
        height: 1em;
        line-height: inherit;
        background-position: center center;
        background-repeat: no-repeat;
        color: inherit;
        box-sizing: border-box;
      }
    }
  }

  .bottom_details {
    width: 100%;
    display: flex;
    margin-top: 15px;

    h2 {
      border-bottom: 1px solid #000;
      margin-right: 6px;
      font-size: 18px;
    }

    h3 {
      font-size: 16px;
    }

    .seasonEndTitle {
      padding: 1px 8px;
      background: #000;
      white-space: nowrap;
      color: #fff;
      border-radius: 8px;
      border-width: 0;
      font-size: 0.9em;
      font-weight: 200;
    }
  }

  .calendar {
    width: 20px;
    height: 20px;
    margin-right: 6px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 820px) {
    .seasonCardBox {
      padding: 20px;
    }

    .seasonCard {
      background: #fff;
    }

    h1 {
      font-size: 1.2em;
      font-weight: bolder;
      margin-left: 20px;
    }
  }
`;
