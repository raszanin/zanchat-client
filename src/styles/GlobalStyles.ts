import { createGlobalStyle } from 'styled-components';

import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
import RobotoMedium from '../assets/fonts/Roboto-Medium.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  font-weight: 400;
  font-display: 'swap';
  font-style: 'normal';
  src: url('${RobotoRegular}') format('truetype');
}

@font-face {
  font-family: 'Roboto';
  font-weight: 500;
  font-display: 'swap';
  font-style: 'normal';
  src: url('${RobotoMedium}') format('truetype');
}

@font-face {
  font-family: 'Roboto';
  font-weight: 700;
  font-display: 'swap';
  font-style: 'normal';
  src: url('${RobotoBold}') format('truetype');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: Roboto, sans-serif;
}

body {
  background: #fafafa;
  color: #f2f2f2;
}

button {
  cursor: pointer;
  font-size: 1rem;
  color: #f2f2f2;
}
`;
