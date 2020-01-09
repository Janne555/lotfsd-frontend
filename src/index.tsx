import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './Redux/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-jss'
import { theme } from './styles/theme'
import { BrowserRouter as Router } from 'react-router-dom'
import { RelayEnvironmentProvider } from 'relay-hooks'
import { environment } from './services'

import './index.css'

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RelayEnvironmentProvider environment={environment}>
          <App />
        </RelayEnvironmentProvider>
      </Provider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root'));
serviceWorker.unregister();