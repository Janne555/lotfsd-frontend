import { createSlice } from '@reduxjs/toolkit'
import { retainers } from '../../../testData/initialState'
import { createCharacter } from '../../specialActions'

const retainersSlice = createSlice({
  name: "retainers",
  initialState: retainers,
  reducers: {
    addRetainer(state, action: AppAction<Retainer>) {
      const { characterId, ...retainer } = action.payload
      state.byId[characterId].retainers.push(retainer)
    }
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { characterId } = action.payload
      state.byId[characterId] = { characterId, retainers: [] }
      state.allIds.push(characterId)
    })
  }
})

export const { addRetainer: _addRetainer } = retainersSlice.actions

export default retainersSlice.reducer