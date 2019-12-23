import { commonActivities } from '../../../testData/initialState'
import { createSlice } from '@reduxjs/toolkit'
import { createCharacter } from '../../newCharacterAction'
import { CHARACTER_CLASSES } from '../../../constants/characterClasses'

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
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { id, class: className } = action.payload
      state.byId[id] = { id, ...CHARACTER_CLASSES[className].commonActivities }
      state.allIds.push(id)
    })
  }
})

export const { setCommonActivityValue } = commonActivitiesSlice.actions

export default commonActivitiesSlice.reducer