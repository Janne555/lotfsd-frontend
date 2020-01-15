import React from 'react'
import { Redirect } from 'react-router-dom'
import { useLogin, useLoginStatus } from '../../hooks'
import { createUseStyles } from 'react-jss'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
  }
}))

type Props = {

}

function Login() {
  const classes = useStyles()
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
    <div className={classes.login}>
      <div>
        <h1>Lamentations <br /> of the <br />frontend developer</h1>
        <form onSubmit={handleSubmit}>
          <TextField variant="outlined" id="username" label="Username" />
          <TextField variant="outlined" type="password" id="password" label="Password" />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  )
}

export default Login