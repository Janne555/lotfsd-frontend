import { createReducer } from 'typesafe-actions'
import { commonActivities } from '../../testData/initialState'

const commonActivitiesReducer = createReducer(commonActivities)

export default commonActivitiesReducer