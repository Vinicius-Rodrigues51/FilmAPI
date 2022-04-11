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
      /* overflow: hidden; */
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
        font-weight: 600;
      }

      p {
        margin-top: 30px;
      }
    }
  }
`;
