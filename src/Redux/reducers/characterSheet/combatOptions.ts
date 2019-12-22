import { createSlice } from '@reduxjs/toolkit'
import { combatOptions } from '../../../testData/initialState'

const combatOptionsSlice = createSlice({
  name: 'combatOptions',
  initialState: combatOptions,
  reducers: {
    setValue(state, action: AppAction<CombatOptions>) {
      const { id, ...combatOptions } = action.payload
      if (id) {
        state.byId[id] = { id, ...combatOptions }
      }
    }
  }
})

export const { setValue } = combatOptionsSlice.actions

export default combatOptionsSlice.reducer