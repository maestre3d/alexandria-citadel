import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Commponents
import App from './component/App';

// Styles
import './assets/scss/tailwind.generated.scss';
import './assets/scss/style.scss';
import './assets/scss/_alexandria.scss';

// Functions
import { getTheme } from './shared/service/theme';
import { listenColorScheme } from './core/theme';

// Configure HTML's attributes
document.documentElement.setAttribute("data-theme", getTheme());
listenColorScheme();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
