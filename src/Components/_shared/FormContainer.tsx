import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

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
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  wrapper: {
    margin: 1,
    position: 'relative',
  }
}))

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onClose: () => void
  children: ReactNode
  label: string
  className?: string
  disabled?: boolean
  loading?: boolean
  error?: string
}

const FormContainer = React.forwardRef<HTMLFormElement, Props>(function FormContainer({ onSubmit, onClose, children, label, className, disabled, loading, error }, ref) {
  const classes = useStyles()

  return (
    <div className={`${classes.root} ${className}`}>
      <h2>{label}</h2>
      <form ref={ref} onSubmit={onSubmit} className={classes.form}>
        {children}
        <div className={classes.buttons}>
          <Button onClick={onClose}>Cancel</Button>
          <div className={classes.wrapper}>
            <Button disabled={disabled || loading} variant="outlined" type="submit">Save</Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
        </div>
        {error}
      </form>
    </div>
  )
})

export default FormContainer