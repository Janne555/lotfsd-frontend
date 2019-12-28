import { createSlice } from '@reduxjs/toolkit'
import { system } from '../../testData/initialState'
import { createCharacter } from '../specialActions'

const { reducer } = createSlice({
  name: 'system',
  initialState: system,
  reducers: {
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { characterId, name } = action.payload
      state.characters.byId[characterId] = name
      state.characters.byName[name] = characterId
    })
  }
})

// export const { } = savingThrowsSlice.actions

export default reducer