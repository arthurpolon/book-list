import { ColorModeScript } from '@chakra-ui/color-mode';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import theme from './style/theme'

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>,
  document.getElementById('root')
);
