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


const useStyles = createUseStyles((theme: Theme) => ({
  characterCreator: {
    backgroundColor: theme.colorGreyLightest,
    padding: theme.padding
  },
  form: {
    maxWidth: 500,
    '& > div': {
      marginBottom: '1rem'
    }
  },
  field: {
    width: '100%',
  }
}))

type Props = {

}

function CharacterCreator({ }: Props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [attributes, setAttributes] = useState<Attributes>({ charisma: 0, constitution: 0, dexterity: 0, intelligence: 0, strength: 0, wisdom: 0 })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const target = (e.target as unknown) as { elements: NewCharacterForm }
    e.preventDefault()
    dispatch(newCharacter(target.elements))
  }

  return (
    <div className={classes.characterCreator}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Attributes attributes={attributes} onChange={(key, value) => setAttributes({ ...attributes, [key]: value })} />
        <TextField className={classes.field} id="name" label="Name" />
        <TextField className={classes.field} id="gender" label="Gender" />
        <TextField className={classes.field} id="race" label="Race" />
        <FormControl className={classes.field}>
          <InputLabel htmlFor="alignment">Alignment</InputLabel>
          <Select inputProps={{ id: 'alignment' }}>
            <option value="chaotic">Chaotic</option>
            <option value="neutral">Neutral</option>
            <option value="lawful">Lawful</option>
          </Select>
        </FormControl>
        <FormControl className={classes.field}>
          <InputLabel htmlFor="class">Class</InputLabel>
          <Select inputProps={{ id: 'class' }}>
            <option value="fighter">Fighter</option>
            <option value="cleric">Cleric</option>
            <option value="magic-user">Magic User</option>
            <option value="specialist">Specialist</option>
          </Select>
        </FormControl>
        <Button className={classes.field} variant="outlined" type="submit">Create</Button>
      </form>
    </div>
  )
}

export default CharacterCreator