import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';


const GlobalStyle = createGlobalStyle`
   ${reset}
  :root {
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    background-color: #F2C1AE;
  }
  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }
  html,
  body,
  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
