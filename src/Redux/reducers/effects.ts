import { createReducer } from "typesafe-actions";
import { effects } from '../../testData/initialState'

const effectReducer = createReducer(effects)

export default effectReducer