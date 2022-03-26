import styled from "styled-components";

export const Wraper = styled.div`
  width: 100%;
  height: 570px;
  background-position: right -200px center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Backdoor = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(31.5, 31.5, 31.5, 1) 150px,
    rgba(31.5, 31.5, 31.5, 0.84) 100%
  );
`;

export const Content = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  height: 100%;
  padding: 30px 0;
  display: grid;
  grid-template-columns: auto 1fr;

  .box {
    display: flex;
    flex-direction: column;
    gap: 0;

    p {
      color: #ddd;
    }
  }

  .zoom {
    overflow: hidden;
    width: 300px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .zoom img {
    max-width: 100%;
    height: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.07);
    }
  }

  .content {
    background: rgb(3, 37, 65);
    padding: 10px 0;
    text-align: center;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    color: white;
  }

  .details {
    margin-left: 30px;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 70px 0;

    .age {
      display: inline-block;
      margin-right: 5px;
      padding: 0.06em 4px 0.15em 4px;
      color: rgba(255, 255, 255, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.6);
      align-items: center;
      justify-content: center;
      display: inline-flex;
      border-radius: 2px;
      line-height: 1;
      font-size: 1em;
    }

    .time {
      position: relative;
      margin-left: 20px;
      &::before {
        content: "";
        width: 8px;
        height: 8px;
        position: absolute;
        left: -15px;
        top: 7px;
        display: inline-flex;
        align-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 100%;
      }
    }

    .genre {
      position: relative;
      margin-left: 20px;
      &::before {
        content: "";
        width: 8px;
        height: 8px;
        position: absolute;
        left: -15px;
        top: 7px;
        display: inline-flex;
        align-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 100%;
      }
    }

    .releaseDate {
      margin-right: 5px;
    }

    .subDet {
      font-size: 16px;
      margin-bottom: 20px;
    }

    .avarage {
      background-color: #081c22;
      display: flex;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 1.3rem;
    }

    h2,
    p {
      color: #ddd;
    }
  }
`;
