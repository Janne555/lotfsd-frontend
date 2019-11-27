import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './Redux/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-jss'
import { theme } from './styles/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'));
serviceWorker.unregister();