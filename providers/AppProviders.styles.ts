import { createGlobalStyle } from 'styled-components';


export const AppRootStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: "Open Sans", sans-serif;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    line-height: inherit;
    margin: 0;
    font-weight: inherit;
    font-family: inherit;
  }

  .overflow-hidden {
    overflow: hidden;
    height: 100%;
  }
`;
