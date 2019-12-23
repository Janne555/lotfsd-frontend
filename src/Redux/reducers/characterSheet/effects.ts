import { effects } from '../../../testData/initialState'
import { createSlice } from '@reduxjs/toolkit'
import { createCharacter } from '../../newCharacterAction'

const effectSlice = createSlice({
  name: 'effects',
  initialState: effects,
  reducers: {

  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { id } = action.payload
      state.byId[id] = { id, effects: [] }
      state.allIds.push(id)
    })
  }
})

// export const { } = effectSlice.actions

export default effectSlice.reducer