import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
    * {
      margin: 0;
      padding: 0;
      list-style: none;
      box-sizing: border-box;
    }

    & p {
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      color: gray;
    }

    & h1 {
      font-family: "Roboto", sans-serif;
    }
    
`;
