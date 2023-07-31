import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;

  form {
    margin-top: 50px;
    text-align: left;
  }

  input {
    border: 0.4px solid;
    margin: 6px 0px;
    width: 100%;
    padding: 8px;
    border-radius: 6px;
    border-color: rgb(100, 100, 100);

    &:hover {
      outline: none;
    }

    &:focus {
      outline: none;
    }
  }

  a {
    color: blue;
  }
`;
