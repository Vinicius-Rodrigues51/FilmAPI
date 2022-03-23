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
  }
`;
