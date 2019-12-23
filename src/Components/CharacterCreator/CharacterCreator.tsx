import React from 'react'
import { createUseStyles } from 'react-jss'
import { useDispatch } from 'react-redux'
import { newCharacter } from '../../Redux/thunks/newCharacter'
import Attributes from '../CharacterSheet/Attributes'

const useStyles = createUseStyles((theme: Theme) => ({
  characterCreator: {
    backgroundColor: theme.colorGreyLightest,
    display: 'flex'
  },
  field: {
    
  }
}))

type Props = {

}

function CharacterCreator({ }: Props) {
  const classes = useStyles()
  const dispatch = useDispatch()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const target = (e.target as unknown) as { elements: NewCharacterForm }
    e.preventDefault()
    dispatch(newCharacter(target.elements))
  }

  return (
    <div className={classes.characterCreator}>
      <form onSubmit={handleSubmit}>
        <div className={classes.field}>
          <label htmlFor="name">Name</label>
          <input id="name"></input>
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <input id="gender"></input>
        </div>
        <div>
          <label htmlFor="race">Race</label>
          <input id="race"></input>
        </div>
        <div>
          <label htmlFor="alignment">Alignment</label>
          <select id="alignment">
            <option value="chaotic">Chaotic</option>
            <option value="neutral">Neutral</option>
            <option value="lawful">Lawful</option>
          </select>
        </div>
        <div>
          <label htmlFor="class">Class</label>
          <select id="class">
            <option value="fighter">Fighter</option>
            <option value="cleric">Cleric</option>
            <option value="magic-user">Magic User</option>
            <option value="specialist">Specialist</option>
          </select>
        </div>
        <Attributes attributes={{ charisma: 0, constitution: 0, dexterity: 0, intelligence: 0, strength: 0, wisdom: 0 }} />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CharacterCreator