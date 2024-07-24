import { createGlobalStyle } from "styled-components";

/* 1. Typography: 

-SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

-FONT SIZE SYSTEM (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
 
*/

const GlobalStyle = createGlobalStyle`




:root {
    --color-soft-red:  hsl(7, 99%, 70%);
    --color-soft-yellow: hsl(51, 100%, 49%);
    --color-text-cyan: hsl(167, 40%, 24%);
    --color-text-blue: hsl(198, 62%, 26%);
    --color-text-footer-cyan:  hsl(168, 34%, 41%);
    --color-dark-blue: hsl(212, 27%, 19%);
    --color-white: hsl(0, 0%, 100%);
    --color-grey:  hsl(210, 4%, 67%);
    --color-grey-dark: hsl(213, 9%, 39%);
    --color-grey-dark-blue: hsl(232, 10%, 55%);
    --color-blue-hover:  #c7d2fe;
    --color-black: #111;
    --font-family-barlow: "Barlow";
    --font-family-fraunces: "Fraunces";

}

* {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
}

html {
    font-size: 62.5%;
    box-sizing: border-box;
}



body {
font-family: var(--font-family-barlow);
font-size: 1.6rem;
line-height: 1.6;



}

`;

export default GlobalStyle;
