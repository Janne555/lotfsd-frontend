import { createSlice } from '@reduxjs/toolkit'
import { retainers } from '../../../testData/initialState'
import { createCharacter } from '../../newCharacterAction'

const retainersSlice = createSlice({
  name: "retainers",
  initialState: retainers,
  reducers: {
    addRetainer(state, action: AppAction<Retainer>) {
      const { id, ...retainer } = action.payload
      state.byId[id].retainers.push(retainer)
    }
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { id } = action.payload
      state.byId[id] = { id, retainers: [] }
      state.allIds.push(id)
    })
  }
})

export const { addRetainer: _addRetainer } = retainersSlice.actions

export default retainersSlice.reducer