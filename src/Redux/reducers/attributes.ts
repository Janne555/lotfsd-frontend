import { createReducer } from 'typesafe-actions'
import { updateAttribute } from '../actions'

const initialState: Attributes = {
  charisma: 18,
  constitution: 18,
  dexterity: 18,
  intelligence: 18,
  strength: 18,
  wisdom: 18
}

const attributeReducer = createReducer(initialState)
  .handleAction(updateAttribute, (state, action) => ({ ...state, [action.payload.name]: action.payload.value }))

export default attributeReducer