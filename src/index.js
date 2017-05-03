import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App';

// Needed for onTouchTap
injectTapEventPlugin();

window.addEventListener("keyPress", () => console.log('asdf'));

render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);