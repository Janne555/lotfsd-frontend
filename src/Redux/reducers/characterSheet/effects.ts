import { effects } from '../../../testData/initialState'
import { createSlice } from '@reduxjs/toolkit'
import { createCharacter } from '../../specialActions'

const effectSlice = createSlice({
  name: 'effects',
  initialState: effects,
  reducers: {

  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { characterId } = action.payload
      state.byId[characterId] = { characterId, effects: [] }
      state.allIds.push(characterId)
    })
  }
})

// export const { } = effectSlice.actions

export default effectSlice.reducer