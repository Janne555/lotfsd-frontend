import { commonActivities } from '../../testData/initialState'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const commonActivitiesSlice = createSlice({
  name: 'commonActivities',
  initialState: commonActivities,
  reducers: {
    setValue(state, { payload: { activity, value } }: PayloadAction<{ activity: keyof CommonActivities, value: number }>) {
      state[activity] = value
    }
  }
})

export const { setValue } = commonActivitiesSlice.actions

export default commonActivitiesSlice.reducer