import { createSlice } from '@reduxjs/toolkit'
import { languages } from '../../../testData/initialState'
import { createCharacter } from '../../newCharacterAction'


const languagesSlice = createSlice({
  name: "languages",
  initialState: languages,
  reducers: {
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { id } = action.payload
      state.byId[id] = { id, languages: [] }
      state.allIds.push(id)
    })
  }
})

// export const { } = languagesSlice.actions

export default languagesSlice.reducer