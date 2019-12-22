import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  button: {
    border: 'none',
    height: '100%',
    width: '100%',
    cursor: 'pointer',
    background: 'none'
  }
}))

function Button(props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  const classes = useStyles()

  return (
    <button {...props} className={classes.button}>
      {props.children}
    </button>
  )
}

export default Button
