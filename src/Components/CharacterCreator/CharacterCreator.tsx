import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import Attributes from '../CharacterSheet/Attributes'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/NativeSelect'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import { randomAttributes, mongoObjectId, calculateAttributeModifiers } from '../../services'
import { useHistory } from 'react-router-dom'
import createCharacterMutation from '../../constants/mutations/createCharacterMutation'
import { CharacterCreatorMutation, CharacterCreatorMutationVariables } from '../../constants/mutations/__generated__/CharacterCreatorMutation'
import { CHARACTER_CLASSES } from '../../constants/characterClasses'
import { useMutation } from '@apollo/react-hooks'

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



function generateVariables(formElements: NewCharacterForm, characterId: string): CharacterCreatorMutationVariables {
  const className = formElements.class.value as Classes

  const characterSheet = {
    charisma: Number(formElements.charisma.value),
    dexterity: Number(formElements.dexterity.value),
    intelligence: Number(formElements.intelligence.value),
    strength: Number(formElements.strength.value),
    wisdom: Number(formElements.wisdom.value),
    constitution: Number(formElements.constitution.value),
    copper: 1,
    gold: 1,
    silver: 1,
    alignment: formElements.alignment.value,
    class: formElements.class.value as Classes,
    gender: formElements.gender.value,
    name: formElements.name.value,
    race: formElements.race.value,
    age: Number(formElements.age.value),
    maxHp: Number(formElements.maxHp.value),
    attackBonus: 1,
    currentHp: Number(formElements.maxHp.value),
    experience: 0,
    surpriseChance: CHARACTER_CLASSES[className].surpriseChance,
    ...CHARACTER_CLASSES[className].combatOptions,
    ...CHARACTER_CLASSES[className].commonActivities,
    ...CHARACTER_CLASSES[className].savingThrows,
  }

  return {
    characterSheet
  }
}

function CharacterCreator() {
  const classes = useStyles()
  const [attributes, setAttributes] = useState<Attributes>({ charisma: 0, constitution: 0, dexterity: 0, intelligence: 0, strength: 0, wisdom: 0 })
  const [attributeError, setAttributeError] = useState<string>()
  const [mutate, { }] = useMutation<CharacterCreatorMutation>(createCharacterMutation)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const target = (e.target as unknown) as { elements: NewCharacterForm }
    e.preventDefault()

    if (Object.values(attributes).some(value => value < 1)) {
      setAttributeError("Attributes should have a value above 0")
      return
    } else {
      setAttributeError(undefined)
    }

    mutate({
      variables: generateVariables(target.elements, mongoObjectId())
    })
  }

  function handleRandomize() {
    setAttributes(randomAttributes())
  }

  return (
    <div className={classes.characterCreator}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Attributes attributes={attributes} onChange={(key, value) => setAttributes({ ...attributes, [key]: value })} modifiers={calculateAttributeModifiers(attributes)} />
        <Button onClick={handleRandomize}>Randomize</Button>
        {/* TODO disallow url unsafe characters */}
        <TextField className={classes.field} id="name" label="Name" required />
        <TextField className={classes.field} id="gender" label="Gender" required />
        <TextField className={classes.field} id="race" label="Race" required />
        <TextField type="number" className={classes.field} id="age" label="Age" required />
        <TextField type="number" className={classes.field} id="money" label="Money" required />
        <TextField type="number" className={classes.field} id="maxHp" label="HP" required />
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