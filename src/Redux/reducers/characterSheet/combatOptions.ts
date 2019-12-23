import { createSlice } from '@reduxjs/toolkit'
import { combatOptions } from '../../../testData/initialState'
import { createCharacter } from '../../newCharacterAction'
import { CHARACTER_CLASSES } from '../../../constants/characterClasses'

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
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { id, class: className } = action.payload
      state.byId[id] = { id, ...CHARACTER_CLASSES[className].combatOptions }
      state.allIds.push(id)
    })
  }
})

export const { setValue } = combatOptionsSlice.actions

export default combatOptionsSlice.reducer