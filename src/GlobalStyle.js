import { createGlobalStyle } from 'styled-components';
import BG360 from './img/BG360.png';
import BG768 from './img/BG768.png';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li,
figure,
figcaption,
blockquote,
dl,
dd,
a {
  margin: 0;
  padding: 0;
}

html, body {
  overflow-x: hidden;
}

body {
  height: 100vh;
  font-family: "Nunito Sans", sans-serif;
  color:#FFE1E1;
  
  @media screen and (max-width:767px){
    background: center / cover no-repeat url(${BG360});
   }

     @media screen and (min-width:768px){
    background: center / cover no-repeat url(${BG768});
   }
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}
`;

export default GlobalStyle;
