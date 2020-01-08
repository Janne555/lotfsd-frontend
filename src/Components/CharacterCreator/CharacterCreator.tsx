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
import { randomAttributes, environment } from '../../services'
import { useHistory } from 'react-router-dom'
import graphql from 'babel-plugin-relay/macro'
import { Environment, commitMutation } from 'react-relay'
import { AttributesInput, CombatOptionsInput, CommonActivitiesInput, InfoInput, SavingThrowsInput, WalletInput } from '../../__generated__/CharacterCreatorMutation.graphql'
import { CHARACTER_CLASSES } from '../../constants/characterClasses'

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

const mutation = graphql`
  mutation CharacterCreatorMutation(
    $attributes: AttributesInput!
    $combatOptions: CombatOptionsInput!
    $commonActivities: CommonActivitiesInput!
    $savingThrows: SavingThrowsInput!
    $wallet: WalletInput!
    $info: InfoInput!) {
      addAttributes(attributes: $attributes) {
        id
      }
      addCombatOptions(combatOptions: $combatOptions) {
        id
      }
      addCommonActivities(commonActivities: $commonActivities) {
        id
      }
      addSavingThrows(savingThrows: $savingThrows) {
        id
      }
      addWallet(wallet: $wallet) {
        id
      }
      addInfo(info: $info) {
        id
      }
    }
`

function createCharacter(environment: Environment, formElements: NewCharacterForm, characterId: string) {
  const attributes: AttributesInput = {
    characterId,
    charisma: Number(formElements.charisma.value),
    dexterity: Number(formElements.dexterity.value),
    intelligence: Number(formElements.intelligence.value),
    strength: Number(formElements.strength.value),
    wisdom: Number(formElements.wisdom.value),
    constitution: Number(formElements.constitution.value),
  }

  const combatOptions: CombatOptionsInput = {
    characterId,
    ...CHARACTER_CLASSES.fighter.combatOptions
  }

  const commonActivities: CommonActivitiesInput = {
    characterId,
    ...CHARACTER_CLASSES.fighter.commonActivities
  }

  const savingThrows: SavingThrowsInput = {
    characterId,
    ...CHARACTER_CLASSES.fighter.savingThrows
  }

  const wallet: WalletInput = {
    characterId,
    copper: 1,
    gold: 1,
    silver: 1
  }

  const info: InfoInput = {
    characterId,
    alignment: formElements.alignment.value,
    class: formElements.class.value as Classes,
    gender: formElements.gender.value,
    name: formElements.name.value,
    race: formElements.race.value,
    age: Number(formElements.age.value),
    maxHp: Number(formElements.maxHp.value),
    player: "joujou",
    attackBonus: 1,
    currentHp: 10,
    experience: 10,
    surpriseChance: 4
  }

  commitMutation(
    environment,
    {
      mutation,
      variables: {
        attributes,
        combatOptions,
        commonActivities,
        savingThrows,
        wallet,
        info
      },
      onError: console.error
    }
  )
}

type Props = {

}

function CharacterCreator(/* { }: Props */) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [attributes, setAttributes] = useState<Attributes>({ charisma: 0, constitution: 0, dexterity: 0, intelligence: 0, strength: 0, wisdom: 0 })
  const [attributeError, setAttributeError] = useState<string>()
  const history = useHistory()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const target = (e.target as unknown) as { elements: NewCharacterForm }
    e.preventDefault()

    createCharacter(environment, target.elements, "5e15f8cc6e25f03b8db4d737")

    if (Object.values(attributes).some(value => value < 1)) {
      setAttributeError("Attributes should have a value above 0")
      return
    } else {
      setAttributeError(undefined)
    }

    dispatch(newCharacter(target.elements, history))
  }

  function handleRandomize() {
    setAttributes(randomAttributes())
  }

  return (
    <div className={classes.characterCreator}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Attributes attributes={attributes} onChange={(key, value) => setAttributes({ ...attributes, [key]: value })} />
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