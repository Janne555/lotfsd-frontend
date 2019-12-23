import { generate } from 'shortid'

const newCharacter = (
  formElements: NewCharacterForm
): AppThunk => dispatch => {
  const characterId = generate()
  
}

export default newCharacter