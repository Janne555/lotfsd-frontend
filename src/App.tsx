import React from 'react'
import Main from './Main'
import { Switch, Route } from 'react-router-dom'
import { createApolloClient } from './services'
import { useLoginStatus, useToken } from './hooks'
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

export default App