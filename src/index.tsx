import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-jss'
import { theme } from './styles/theme'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createApolloClient } from './services'
import { useLoginStatus, LoginProvider, useToken } from './hooks'
import Login from './Components/Interface/Login'
import Register from './Components/Interface/Register'
import { ApolloProvider } from '@apollo/react-hooks'
import 'normalize.css'
import './index.css'

function App() {
  const loginStatus = useLoginStatus()
  const token = useToken()
  const client = React.useMemo(() => token ? createApolloClient(token) : undefined, [token])

  if (loginStatus === "logged-in" && client) {
    return (
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    )
  } else {
    return (
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route>
          <Login />
        </Route>
      </Switch>
    )
  }
}

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