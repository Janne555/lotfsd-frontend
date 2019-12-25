import { generate } from 'shortid'
import { _addRetainer } from '../reducers/characterSheet/retainers'

const addRetainer = (
  {
    name: { value: name },
    class: { value: className },
    hitpoints: { value: hitpoints },
    level: { value: level },
    position: { value: position },
    share: { value: share },
    wage: { value: wage },
  }: AddRetainerForm,
  characterId: string
): AppThunk => dispatch => {
  const uuid = generate()
  dispatch(_addRetainer({
    uuid,
    id: characterId,
    name,
    class: className,
    hitpoints: hitpoints.length !== 0 ? Number(hitpoints) : undefined,
    level: level.length !== 0 ? Number(level) : undefined,
    position: position,
    share: share.length !== 0 ? Number(share) : undefined,
    wage: wage.length !== 0 ? Number(wage) : undefined
  }))
}

export { addRetainer }