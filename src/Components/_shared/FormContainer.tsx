import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import Button from '@material-ui/core/Button'

const useStyles = createUseStyles((theme: Theme) => ({
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
}

const FormContainer = React.forwardRef<HTMLFormElement, Props>(({ onSubmit, onClose, children }, ref) => {
  const classes = useStyles()

  return (
    <form ref={ref} onSubmit={onSubmit} className={classes.form}>
      {children}
      <div className={classes.buttons}>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="outlined" type="submit">Save</Button>
      </div>
    </form>
  )
})

export default FormContainer