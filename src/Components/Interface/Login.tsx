import React from 'react'
import { useDispatch } from '../../hooks'
import login from '../../Redux/thunks/login';

export default function Login() {
  const dispatch = useDispatch()

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
