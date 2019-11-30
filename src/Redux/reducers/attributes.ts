import { createReducer } from 'typesafe-actions'
import { updateAttribute } from '../actions'
import { attributes } from '../../testData/initialState'


const attributeReducer = createReducer(attributes)
  .handleAction(updateAttribute, (state, action) => ({ ...state, [action.payload.name]: action.payload.value }))

export default attributeReducer