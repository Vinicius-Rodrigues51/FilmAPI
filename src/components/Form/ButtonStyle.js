import styled from "styled-components";

export const Buttons = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: rgb(1, 180, 228);
  color: white;
  padding: 0.5rem 0.5rem;
  transition: 0.1s;
  min-width: 6rem;
  font-weight: bold;
  margin-top: 15px;

  &:hover {
    background: rgb(3, 37, 65);
    transition: 0.2s ease;
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;
