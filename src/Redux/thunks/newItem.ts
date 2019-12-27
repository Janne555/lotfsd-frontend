import { addNewItem } from '../actions'
import { generate } from 'shortid'

const newItem = (
  elements: ItemCreatorForm,
  effects: ItemEffect[]
): AppThunk => dispatch => {
  console.log(Object.values(elements).map(e => e?.value))

  const type = elements.type?.value as Item['type'] | undefined
  const name = elements.name?.value
  const stackSize = Number(elements.stackSize?.value)
  const description = elements.description?.value
  const baseArmorClass = elements.armorClass ? Number(elements.armorClass.value) : undefined
  const damage = elements.damage?.value
  const short = Number(elements.rangeShort?.value)
  const medium = Number(elements.rangeMedium?.value)
  const long = Number(elements.rangeLong?.value)

  const range = {
    short,
    medium,
    long
  }


  if (!type || !name || !stackSize || !description) {
    return
  }

  const id = generate()
  const encumbrancePoints = stackSize === 1 ? 1 : 1 / stackSize

  switch (type) {
    case 'weapon':
      if (baseArmorClass != null) {
        dispatch(addNewItem({
          type: 'armor',
          name,
          stackSize,
          id,
          encumbrancePoints,
          effects,
          description,
          baseArmorClass
        }))
      }
      break
    case 'armor':
      if (damage != null) {
        dispatch(addNewItem({
          type: 'weapon',
          name,
          stackSize,
          id,
          encumbrancePoints,
          effects,
          description,
          damage,
          range,
        }))
      }
      break
    case 'item':
      dispatch(addNewItem({
        type: 'item',
        name,
        stackSize,
        id,
        encumbrancePoints,
        effects,
        description,
      }))
      break
    default:
      return
  }
}

export {
  newItem
}