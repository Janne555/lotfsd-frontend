import { createReducer } from 'typesafe-actions'
import { equipmentList } from '../../testData/initialState'


const equipmentListReducer = createReducer(equipmentList)

export default equipmentListReducer