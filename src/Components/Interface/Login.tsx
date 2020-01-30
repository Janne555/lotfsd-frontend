import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { useLogin, useLoginStatus } from '../../hooks'
import { createUseStyles } from 'react-jss'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormLabel from '@material-ui/core/FormLabel'

const useStyles = createUseStyles((theme: Theme) => ({
  login: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      width: '50%',
      height: '40%',
      boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75)',
      '& > h1': {
        backgroundColor: theme.colorPurpleMid,
        color: 'white',
        fontWeight: 'initial',
        padding: '1rem'
      },
      '& > form': {
        justifySelf: 'center',
        alignSelf: 'center',
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '-1rem',
        '& > *': {
          marginTop: '1rem'
        }
      }
    }
  },
  '@media (max-width: 1100px)': {
    login: {
      '& > div': {
        width: '100%',
        height: '100%',
        boxShadow: 'none',
        '& > form': {
          width: '80%',
          marginTop: 0,
          '& > *': {
            marginTop: '1rem'
          }
        }
      }
    }
  }
}))

function Login() {
  const classes = useStyles()
  const loginStatus = useLoginStatus()
  const { login, error } = useLogin()
  const history = useHistory()

  if (loginStatus === "logged-in") {
    return (
      <Redirect to="/characters" />
    )
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    login(e.target.elements.username.value, e.target.elements.password.value)
  }

  function handleRegister() {
    history.push("/register")
  }

  return (
    <div className={classes.login}>
      <div>
        <h1>Lamentations<br /> of the<br />frontend developer</h1>
        <form onSubmit={handleSubmit}>
          <TextField variant="outlined" id="username" label="Username" autoComplete="username" />
          <TextField variant="outlined" type="password" id="password" label="Password" autoComplete="current-password" />
          <Button variant="outlined" type="submit">Login</Button>
          <Button onClick={handleRegister}>Register</Button>
          <FormLabel error>{error}</FormLabel>
        </form>
      </div>
    </div>
  )
}

export default Login