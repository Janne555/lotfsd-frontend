import { generate } from 'shortid'
import { createCharacter } from '../actions'

const newCharacter = (
  formElements: NewCharacterForm
): AppThunk => dispatch => {
  const id = generate()
  dispatch(createCharacter({
    alignment: formElements.alignment.value,
    charisma: formElements.charisma.value,
    class: formElements.class.value,
    constitution: formElements.constitution.value,
    dexterity: formElements.dexterity.value,
    gender: formElements.gender.value,
    intelligence: formElements.intelligence.value,
    name: formElements.name.value,
    race: formElements.race.value,
    strength: formElements.strength.value,
    wisdom: formElements.wisdom.value,
    id
  }))
}

export { newCharacter }