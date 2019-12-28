import { createSlice } from '@reduxjs/toolkit'
import { properties } from '../../../testData/initialState'
import { createCharacter } from '../../specialActions'

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: properties,
  reducers: {
    addProperty(state, action: AppAction<Property>) {
      const { characterId } = action.payload
      state.byId[characterId].properties.push(action.payload)
    }
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { characterId } = action.payload
      state.byId[characterId] = { characterId, properties: [] }
      state.allIds.push(characterId)
    })
  }
})

export const { addProperty } = propertiesSlice.actions

export default propertiesSlice.reducer