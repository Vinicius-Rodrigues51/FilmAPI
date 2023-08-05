import styled from "styled-components";

export const Container = styled.div`
  /* max-width: 1820px; */
  margin: 0 auto;

  .background {
    width: 100%;
    height: calc(100vh / 2.5);
    background-position: right center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
  }

  .wraper {
    color: #fff;
    padding: 30px 40px;
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;

    h2 {
      font-weight: 600;
      font-size: 50px;
    }
    h3 {
      font-weight: 500;
      font-size: 30px;
    }

    .search {
      margin-top: 40px;
      form {
        width: 100%;
        display: flex;
        position: relative;
      }
      input[type="text"] {
        width: 100%;
        height: 46px;
        color: rgba(0, 0, 0, 0.5);
        border-radius: 30px;
        padding: 10px 20px;
        outline: none;
        border: none;
        position: relative;
        font-size: 20px;
        line-height: 46px;
      }

      input[type="submit"] {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        display: inline-flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        height: 46px;
        padding: 10px 26px;
        border: none;
        color: #fff;
        border-radius: 30px;
        font-size: 18px;
        background: linear-gradient(
          to right,
          rgb(30, 213, 169) 0%,
          rgba(1, 180, 228) 100%
        );
      }
    }
  }

  /* @media (max-width: 820px) {
    
  } */
`;
