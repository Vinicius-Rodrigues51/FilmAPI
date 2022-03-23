import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;

  a {
    color: #fff;
  }

  nav a {
    color: #fff;
    padding: 5px 10px;
    align-items: center;
    background: transparent;
    border: 1px solid white;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background: white;
      color: #c62e65;
    }
  }

  ul {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  #Switch2 {
    display: none;
  }

  label {
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: 25px;
    }
  }
`;
