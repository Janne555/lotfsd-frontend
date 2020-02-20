import React from 'react'
import { createUseStyles } from 'react-jss'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormLabel from '@material-ui/core/FormLabel'
import { useLogin } from '../../hooks'
import { useHistory } from 'react-router-dom'

const useStyles = createUseStyles((theme: Theme) => ({
  register: {
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
      height: '50%',
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
    register: {
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

function Register() {
  const classes = useStyles()
  const { register, error } = useLogin()
  const history = useHistory()

  function handleSubmit(e: any) {
    e.preventDefault()
    const username = e.target.elements.username.value
    const password = e.target.elements.password.value
    const passwordConfirm = e.target.elements.passwordConfirm.value

    register(username, password, passwordConfirm)
  }

  function handleBack() {
    history.push("/")
  }

  return (
    <div className={classes.register}>
      <div>
        <h1>Create new user account</h1>
        <form onSubmit={handleSubmit}>
          <TextField variant="outlined" id="username" label="Username" autoComplete="off" />
          <TextField variant="outlined" type="password" id="password" label="Password" autoComplete="off" />
          <TextField variant="outlined" type="password" id="passwordConfirm" label="Confirm Password" autoComplete="off" />
          <Button variant="outlined" type="submit">Register</Button>
          <Button onClick={handleBack}>Back to Login</Button>
          <FormLabel error>{error}</FormLabel>
        </form>
      </div>
    </div>
  )
}

export default Register