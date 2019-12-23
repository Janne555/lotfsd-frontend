import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useDispatch } from 'react-redux'
import { newCharacter } from '../../Redux/thunks/newCharacter'
import Attributes from '../CharacterSheet/Attributes'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/NativeSelect'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import { randomAttributes } from '../../services'

const useStyles = createUseStyles((theme: Theme) => ({
  characterCreator: {
    backgroundColor: theme.colorGreyLightest,
    padding: theme.padding
  },
  form: {
    maxWidth: 500,
    '& > div': {
      marginBottom: '1rem'
    },
    '& button:first-of-type': {
      float: 'right'
    }
  },
  field: {
    width: '100%',
  },
  error: {
    color: 'red',
    textAlign: 'center'
  }
}))

type Props = {

}

function CharacterCreator(/* { }: Props */) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [attributes, setAttributes] = useState<Attributes>({ charisma: 0, constitution: 0, dexterity: 0, intelligence: 0, strength: 0, wisdom: 0 })
  const [attributeError, setAttributeError] = useState<string>()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const target = (e.target as unknown) as { elements: NewCharacterForm }
    e.preventDefault()

    if (Object.values(attributes).some(value => value < 1)) {
      setAttributeError("Attributes should have a value above 0")
      return
    } else {
      setAttributeError(undefined)
    }

    dispatch(newCharacter(target.elements))
  }

  function handleRandomize() {
    setAttributes(randomAttributes())
  }

  return (
    <div className={classes.characterCreator}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Attributes attributes={attributes} onChange={(key, value) => setAttributes({ ...attributes, [key]: value })} />
        <Button onClick={handleRandomize}>Randomize</Button>
        <TextField className={classes.field} id="name" label="Name" required />
        <TextField className={classes.field} id="gender" label="Gender" required />
        <TextField className={classes.field} id="race" label="Race" required />
        <FormControl required className={classes.field}>
          <InputLabel htmlFor="alignment">Alignment</InputLabel>
          <Select inputProps={{ id: 'alignment' }}>
            <option value="chaotic">Chaotic</option>
            <option value="neutral">Neutral</option>
            <option value="lawful">Lawful</option>
          </Select>
        </FormControl>
        <FormControl required className={classes.field}>
          <InputLabel htmlFor="class">Class</InputLabel>
          <Select inputProps={{ id: 'class' }}>
            <option value="fighter">Fighter</option>
            <option value="cleric">Cleric</option>
            <option value="magic-user">Magic User</option>
            <option value="specialist">Specialist</option>
          </Select>
        </FormControl>
        <Button className={classes.field} variant="outlined" type="submit">Create</Button>
        {
          <p className={classes.error}>{attributeError}</p>
        }
      </form>
    </div>
  )
}

export default CharacterCreator