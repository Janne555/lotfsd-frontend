import { createSlice } from '@reduxjs/toolkit'
import { combatOptions } from '../../../testData/initialState'
import { createCharacter } from '../../newCharacterAction'
import { CHARACTER_CLASSES } from '../../../constants/characterClasses'

const combatOptionsSlice = createSlice({
  name: 'combatOptions',
  initialState: combatOptions,
  reducers: {
    setValue(state, action: AppAction<CombatOptions>) {
      const { characterId, ...combatOptions } = action.payload
      state.byId[characterId] = { characterId, ...combatOptions }
    }
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { characterId, class: className } = action.payload
      state.byId[characterId] = { characterId, ...CHARACTER_CLASSES[className].combatOptions }
      state.allIds.push(characterId)
    })
  }
})

export const { setValue } = combatOptionsSlice.actions

export default combatOptionsSlice.reducer