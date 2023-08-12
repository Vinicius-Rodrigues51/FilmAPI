import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 100px;

  h2 {
    margin-bottom: 40px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 80px 0;
  }
`;

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  row-gap: 50px;

  .imgBox {
    width: 250px;
    height: 370px;
    border-radius: 12px;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    border-radius: 12px;

    &:hover {
      transform: scale(1.1);
    }
  }

  h3 {
    color: ${(props) => props.theme.colors.text};
  }

  @media (max-width: 800px) {
    padding: 0 20px;

    img {
      width: 250px;
      height: auto;
    }

    a:nth-child(2) {
      display: block;
    }
  }

  @media (max-width: 1200px) {
    .imgBox {
      width: 300px;
      height: 425px;
    }
  }

  @media (max-width: 748px) {
    .imgBox {
      width: 300px;
      height: 425px;
      margin-bottom: 0;
      margin: auto;
    }

    img {
      &:hover {
        transform: none;
      }
    }
  }

  @media (max-width: 800px) {
    padding: 0 20px;

    img {
      width: 250px;
      height: auto;
    }

    a:nth-child(2) {
      display: block;
    }
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  background: rgb(1, 180, 228);
  border: none;
  cursor: pointer;
  color: white;
  font-size: 20px;
  border-radius: 6px;

  &:hover {
    background: rgb(3, 37, 65);
    transition: 0.2s ease;
    outline: none;
  }
`;
