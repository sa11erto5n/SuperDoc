// GlobalStyle.js

import { createGlobalStyle } from 'styled-components';


// This GlobalStyle Sets the different fonts for Arabic & English Languages

const GlobalStyle = createGlobalStyle`
  ${({ lang }) =>
    lang === 'ar' ?
      `
      *:not(i) {
        font-family: var(--cairo-font) !important;
      }
    ` :
      `
      *:not(i) {
        font-family: var(--satoshi-font) !important;
    }
      `}
`;

export default GlobalStyle;
