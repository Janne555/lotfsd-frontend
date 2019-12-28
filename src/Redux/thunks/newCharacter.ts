import { generate } from 'shortid'
import { createCharacter } from '../newCharacterAction'
import { useHistory } from 'react-router-dom'
import { selectUsername } from '../selectors'

const newCharacter = (
  formElements: NewCharacterForm,
  history: ReturnType<typeof useHistory>
): AppThunk => (dispatch, getState) => {
  const characterId = generate()
  const username = selectUsername(getState())

  dispatch(createCharacter({
    alignment: formElements.alignment.value,
    charisma: Number(formElements.charisma.value),
    class: formElements.class.value as Classes,
    constitution: Number(formElements.constitution.value),
    dexterity: Number(formElements.dexterity.value),
    gender: formElements.gender.value,
    intelligence: Number(formElements.intelligence.value),
    name: formElements.name.value,
    race: formElements.race.value,
    strength: Number(formElements.strength.value),
    wisdom: Number(formElements.wisdom.value),
    age: Number(formElements.age.value),
    money: Number(formElements.money.value),
    maxHp: Number(formElements.maxHp.value),
    characterId,
    player: username
  }))

  history.push(`/characters/${formElements.name.value}`)
}

export { newCharacter }