import React from 'react'
import { createUseStyles } from 'react-jss'
import TextField from '@material-ui/core/TextField'
import { useDispatch } from '../../../hooks'
import { addRetainer } from '../../../Redux/thunks'
import FormContainer from '../../_shared/FormContainer'

const useStyles = createUseStyles((theme: Theme) => ({
  addRetainer: {
    backgroundColor: 'white',
    padding: '2rem',
    maxWidth: 500,
    '& h2': {
      margin: 0
    }
  },
  field: {
    width: '100%'
  },
  buttons: {
    display: 'flex',
    marginTop: '1rem',
    justifyContent: 'space-between'
  }
}))

type Props = {
  onClose: () => void
  characterId: string
}

const AddRetainer = React.forwardRef<HTMLFormElement, Props>(({ onClose, characterId }, ref) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const target = (e.target as unknown) as { elements: AddRetainerForm }
    e.preventDefault()
    dispatch(addRetainer(target.elements, characterId))
    onClose()
  }

  return (
    <div className={classes.addRetainer}>
      <h2>Add Retainer</h2>
      <FormContainer ref={ref} onClose={onClose} onSubmit={handleSubmit}>
        <TextField className={classes.field} id="name" label="Name" required />
        <TextField className={classes.field} id="position" label="Position" />
        <TextField className={classes.field} id="class" label="Class" />
        <TextField className={classes.field} id="level" label="Level" type="number" />
        <TextField className={classes.field} id="hitpoints" label="Hitpoints" type="number" />
        <TextField className={classes.field} id="wage" label="Wage" type="number" />
        <TextField className={classes.field} id="share" label="Share" type="number" />
      </FormContainer>
    </div>
  )
})

export default AddRetainer