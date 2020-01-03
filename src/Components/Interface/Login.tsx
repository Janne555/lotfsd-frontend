import React from 'react'
import { useDispatch, useSelector } from '../../hooks'
import { loginThunk } from '../../Redux/thunks'
import { selectIsLoggedIn } from '../../Redux/selectors'
import { Redirect } from 'react-router-dom'



function Login() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn)

  if (isLoggedIn) {
    return (
      <Redirect to="/characters" />
    )
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(loginThunk(e.target.elements.username.value, e.target.elements.password.value))
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