import { commonActivities } from '../../../testData/initialState'
import { createSlice } from '@reduxjs/toolkit'

const commonActivitiesSlice = createSlice({
  name: 'commonActivities',
  initialState: commonActivities,
  reducers: {
    setCommonActivityValue(state, action: AppAction<{ activity: keyof CommonActivities, value: number }>) {
      const { id, activity, value } = action.payload
      if (id) {
        state.byId[id][activity] = value
      }
    }
  }
})

export const { setCommonActivityValue } = commonActivitiesSlice.actions

export default commonActivitiesSlice.reducer