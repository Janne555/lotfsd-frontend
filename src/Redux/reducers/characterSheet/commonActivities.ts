import { commonActivities } from '../../../testData/initialState'
import { createSlice } from '@reduxjs/toolkit'
import { createCharacter } from '../../specialActions'
import { CHARACTER_CLASSES } from '../../../constants/characterClasses'

const commonActivitiesSlice = createSlice({
  name: 'commonActivities',
  initialState: commonActivities,
  reducers: {
    setCommonActivityValue(state, action: AppAction<{ activity: keyof CommonActivities, value: number }>) {
      const { characterId, activity, value } = action.payload
      state.byId[characterId][activity] = value
    }
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { characterId, class: className } = action.payload
      state.byId[characterId] = { characterId, ...CHARACTER_CLASSES[className].commonActivities }
      state.allIds.push(characterId)
    })
  }
})

export const { setCommonActivityValue } = commonActivitiesSlice.actions

export default commonActivitiesSlice.reducer