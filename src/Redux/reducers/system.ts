import { createSlice } from '@reduxjs/toolkit'
import { system } from '../../testData/initialState'
import { createCharacter } from '../newCharacterAction'

const { reducer } = createSlice({
  name: 'system',
  initialState: system,
  reducers: {

  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { id, name } = action.payload
      state.characters.byId[id] = name
      state.characters.byName[name] = id
    })
  }
})

// export const { } = savingThrowsSlice.actions

export default reducer