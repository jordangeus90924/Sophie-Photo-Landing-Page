import { createGlobalStyle } from 'styled-components';
import themeList from '../data/themeList';

// Typography
import '@fontsource/cormorant-garamond';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/700.css';

const GlobalStyles = createGlobalStyle`
:root{
  /* colors */
  --darkBlue_1: #725C52;
  --darkBlue_2: #5D4A41;
  --darkBlue_3: #48382F;
  --darkBlue_4: #130f0c;
  --mediumSlateBlue: #866E63;
  --lightBlue_1: #F9F5F3;
  --lightBlue_2: #F0E5E1;
  --white: #FFFFFF;
  --black: #000000;

  /* others */
    --header-height: 50px;
}
html{
  font-size: 10px;
}
body{
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_4)'};
  font-family: 'Cormorant Garamond', sans-serif;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  cursor: pointer;
}
ul, li{
  list-style: none;
}
.container{
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}
img, svg{
  width: 100%;
  height: 100%;
}
`;

export default GlobalStyles;
