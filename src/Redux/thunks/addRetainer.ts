import { generate } from 'shortid'
import { addRetainer as _addRetainer } from '../reducers/characterSheet/retainers'

const addRetainer = (
  elements: AddRetainerForm,
  characterId: string
): AppThunk => dispatch => {
  const uuid = generate()
  dispatch(_addRetainer({
    uuid,
    id: characterId,
    name: elements.name.value,
    class: elements.class.value,
    hitpoints: Number(elements.hitpoints.value),
    level: Number(elements.level.value),
    position: elements.position.value,
    share: Number(elements.share.value),
    wage: Number(elements.wage.value)
  }))
}

export { addRetainer }