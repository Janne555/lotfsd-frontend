import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import Button from '@material-ui/core/Button'

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    backgroundColor: 'white',
    padding: '2rem',
    maxWidth: 500,
    '& h2': {
      margin: 0
    }
  },
  form: {
    '& > div': {
      width: '100%'
    }
  },
  buttons: {
    display: 'flex',
    marginTop: '1rem',
    justifyContent: 'space-between'
  }
}))

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onClose: () => void
  children: ReactNode
  label: string
  className?: string
}

const FormContainer = React.forwardRef<HTMLFormElement, Props>(function FormContainer({ onSubmit, onClose, children, label, className }, ref) {
  const classes = useStyles()

  return (
    <div className={`${classes.root} ${className}`}>
      <h2>{label}</h2>
      <form ref={ref} onSubmit={onSubmit} className={classes.form}>
        {children}
        <div className={classes.buttons}>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="outlined" type="submit">Save</Button>
        </div>
      </form>
    </div>
  )
})

export default FormContainer