import { createSlice } from '@reduxjs/toolkit'
import { properties } from '../../../testData/initialState'
import { createCharacter } from '../../newCharacterAction'

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: properties,
  reducers: {
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { id } = action.payload
      state.byId[id] = { id, properties: [] }
      state.allIds.push(id)
    })
  }
})

// export const { } = propertiesSlice.actions

export default propertiesSlice.reducer