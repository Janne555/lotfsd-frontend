import React from 'react'
import { createUseStyles } from 'react-jss'
import { useDispatch } from 'react-redux'
import { newCharacter } from '../../Redux/thunks/newCharacter'

const useStyles = createUseStyles((theme: Theme) => ({
  characterCreator: {
    backgroundColor: theme.colorGreyLightest,
    display: 'flex'
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
        <div>
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
        <div>
          <label htmlFor="charisma">Charisma</label>
          <input type="number" id="charisma"></input>
        </div>
        <div>
          <label htmlFor="constitution">Constitution</label>
          <input required type="number" id="constitution"></input>
        </div>
        <div>
          <label htmlFor="dexterity">Dexterity</label>
          <input type="number" id="dexterity"></input>
        </div>
        <div>
          <label htmlFor="intelligence">Intelligence</label>
          <input type="number" id="intelligence"></input>
        </div>
        <div>
          <label htmlFor="strength">Strength</label>
          <input type="number" id="strength"></input>
        </div>
        <div>
          <label htmlFor="wisdom">Wisdom</label>
          <input type="number" id="wisdom"></input>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CharacterCreator