import { createReducer } from 'typesafe-actions'
import { attributes, savingThrows } from '../../testData/initialState'

const savingThrowsReducer = createReducer(savingThrows)

export default savingThrowsReducer