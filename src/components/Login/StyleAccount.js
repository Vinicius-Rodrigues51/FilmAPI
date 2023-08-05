import styled from "styled-components";

export const Container = styled.section`
  /* max-width: 1400px; */
  margin: 0 auto;

  .inner_content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    background: transparent;
    background-repeat: no-repeat;
    background-position: center;
  }

  .content {
    padding: 40px;
    flex-wrap: nowrap;
    color: #fff;
    display: flex;
    max-width: 1400px;
    width: 100%;
  }

  .avatar {
    min-width: 150px;
    width: 150px;
    height: 150px;

    a {
      display: block;
      width: 100%;
      height: 100%;
      background: 0 0;
      text-decoration: none;
      font-weight: 400;
      color: #fff;
    }

    span {
      display: inline-flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      font-size: 4em;
      width: 100%;
      height: 100%;
      background-color: rgb(212, 2, 66);
      border-radius: 100%;
    }

    img {
      border-radius: 100%;
    }
  }

  .backgorund {
    width: 100%;
    height: calc(100vh / 2.5);
    background-position: center;
    background-size: auto;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
  }

  .box {
    display: flex;
    align-items: center;
  }

  .about {
    width: 100%;
    padding-left: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: nowrap;
  }

  .content_wrapper {
    padding: 0;
    line-height: 1;
    align-items: baseline;

    .flex {
      width: 100%;
      flex-wrap: nowrap;
      display: flex;
    }
  }

  .gradient {
    background-image: radial-gradient(
        at 30% top,
        rgba(3, 37, 65, 0.75) 0%,
        rgba(3, 37, 65, 0.9) 70%
      ),
      url("https://www.themoviedb.org/assets/2/v4/account_pipes/red-b64316df5633aa0687196d10fa429418035b55122c0b5726082669b9748a0e2a.svg");
  }
`;
