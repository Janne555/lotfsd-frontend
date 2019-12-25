import React from 'react'
import { createUseStyles } from 'react-jss'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useDispatch } from '../../../hooks'
import { addRetainer } from '../../../Redux/thunks'

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

function AddRetainer({ onClose, characterId }: Props) {
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
      <form onSubmit={handleSubmit}>
        <TextField className={classes.field} id="name" label="Name" required />
        <TextField className={classes.field} id="position" label="Position" />
        <TextField className={classes.field} id="class" label="Class" />
        <TextField className={classes.field} id="level" label="Level" type="number" />
        <TextField className={classes.field} id="hitpoints" label="Hitpoints" type="number" />
        <TextField className={classes.field} id="wage" label="Wage" type="number" />
        <TextField className={classes.field} id="share" label="Share" type="number" inputProps={{ min: 0, max: 100 }} />
        <div className={classes.buttons}>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="outlined" type="submit">Save</Button>
        </div>
      </form>
    </div>
  )
}

export default AddRetainer