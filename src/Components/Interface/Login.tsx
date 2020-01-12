import React from 'react'
import { Redirect } from 'react-router-dom'
import { useLogin, useLoginStatus } from '../../hooks'

function Login() {
  const loginStatus = useLoginStatus()
  const { login } = useLogin()

  if (loginStatus === "logged-in") {
    return (
      <Redirect to="/characters" />
    )
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    login(e.target.elements.username.value, e.target.elements.password.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login