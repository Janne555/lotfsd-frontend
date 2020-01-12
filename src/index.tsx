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
import { useLoginStatus, LoginProvider } from './hooks'
import Login from './Components/Interface/Login'

function Foo() {
  const loginStatus = useLoginStatus()

  if (loginStatus === "logged-in") {
    return <App />
  } else {
    return <Login />
  }
}

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RelayEnvironmentProvider environment={environment}>
          <LoginProvider>
            <Foo />
          </LoginProvider>
        </RelayEnvironmentProvider>
      </Provider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root'));
serviceWorker.unregister();