import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from 'react-jss'
import { theme } from './styles/theme'
import { BrowserRouter as Router } from 'react-router-dom'
import { LoginProvider } from './hooks'
import 'normalize.css'
import './index.css'
import App from './App'

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
        <LoginProvider>
          <App />
        </LoginProvider>
    </ThemeProvider>
  </Router >,
  document.getElementById('root'));
serviceWorker.unregister();