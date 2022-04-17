import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Source Sans Pro', sans-serif;
     
 }

 :root {
    --tmdbDarkBlue: 3, 37, 65;
  }

 body {
     background: ${(props) => props.theme.colors.background};
     color: ${(props) => props.theme.colors.text};
     transition: background-color .4s ease;
     font-size: 18px;
     overflow-x: hidden;

     &::-webkit-scrollbar {
      height: 8px;
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-color: rgb(219, 219, 219);
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
    }


 h1,h2,h3,h4,h5 {
     font-weight: 400;
 }

 li {
     list-style: none;
 }

 a {
     text-decoration: none;
 }
 
`;
