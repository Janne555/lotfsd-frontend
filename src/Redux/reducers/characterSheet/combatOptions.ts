import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { combatOptions } from '../../../testData/initialState'

const combatOptionsSlice = createSlice({
  name: 'combatOptions',
  initialState: combatOptions,
  reducers: {
    setValue(state, action: PayloadAction<CombatOptions>) {
      return action.payload
    }
  }
})

export const { setValue } = combatOptionsSlice.actions

export default combatOptionsSlice.reducer