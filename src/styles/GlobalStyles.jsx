// IMPORT PACKAGES
import { createGlobalStyle } from 'styled-components';

// GLOBAL STYLES
const GlobalStyles = createGlobalStyle`
  :root {
    /* COLORS */
    --color-input-text: hsl(0, 0%, 52%);
    --color-active: hsl(138, 17%, 61%);

    /* TYPOGRAPHY */
    --family: 'Nunito Sans', 'Arial', sans-serif;
    --textXS: 12px;
    --textS: 14px;
    --textM: 16px;
    --textL: 18px;
    --textXL: 24px;
    --textXXL: 32px;
    --lh: 1.2;
  }

  body {
    margin: 0;
    /* font-family: var(--family); */
    color: var(--color-text);
    background-color: var(--color-bg);
  }
`;

export default GlobalStyles;
