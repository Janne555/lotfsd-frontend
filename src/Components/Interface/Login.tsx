import React from 'react'
import { useDispatch, useSelector } from '../../hooks'
import login from '../../Redux/thunks/login';
import { selectIsLoggedIn } from '../../Redux/selectors';
import { Redirect } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn)

  if (isLoggedIn) {
    return (
      <Redirect to="/characters" />
    )
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(login(e.target[0], e.target[1]))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input name="username" />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
