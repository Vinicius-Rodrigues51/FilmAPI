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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  row-gap: 50px;

  .imgBox {
    width: 350px;
    height: 525px;
    border-radius: 12px;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 20px;
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
`;

export const Button = styled.button`
  padding: 8px 16px;
  background: #c62e65;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 20px;
`;
