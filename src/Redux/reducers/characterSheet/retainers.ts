import { createSlice } from '@reduxjs/toolkit'
import { retainers } from '../../../testData/initialState'
import { createCharacter } from '../../newCharacterAction'


const retainersSlice = createSlice({
  name: "retainers",
  initialState: retainers,
  reducers: {
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { id } = action.payload
      state.byId[id] = { id, retainers: [] }
      state.allIds.push(id)
    })
  }
})

// export const { } = retainersSlice.actions

export default retainersSlice.reducer