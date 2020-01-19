import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './Redux/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-jss'
import { theme } from './styles/theme'
import { BrowserRouter as Router } from 'react-router-dom'
import { createApolloClient } from './services'
import { useLoginStatus, LoginProvider, useToken } from './hooks'
import Login from './Components/Interface/Login'
import { ApolloProvider } from '@apollo/react-hooks'
import 'normalize.css'
import './index.css'

function Foo() {
  const loginStatus = useLoginStatus()
  const token = useToken()
  const client = React.useMemo(() => token ? createApolloClient(token) : undefined, [token])

  if (loginStatus === "logged-in" && client) {
    return (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    )
  } else {
    return <Login />
  }
}

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <LoginProvider>
          <Foo />
        </LoginProvider>
      </Provider>
    </ThemeProvider>
  </Router >,
  document.getElementById('root'));
serviceWorker.unregister();