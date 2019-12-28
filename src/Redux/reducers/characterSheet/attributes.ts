import { createSlice } from '@reduxjs/toolkit'
import { attributes } from '../../../testData/initialState'
import { createCharacter } from '../../newCharacterAction'
import pick from 'lodash/pick'

const attributesSlice = createSlice({
  name: "attributes",
  initialState: attributes,
  reducers: {
    setAttribute(state, action: AppAction<{ attributeName: keyof Attributes, value: number }>) {
      const { characterId, attributeName, value } = action.payload
      state.byId[characterId][attributeName] = value
    }
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { characterId } = action.payload
      state.byId[characterId] = { characterId, ...pick(action.payload, ['charisma', 'constitution', 'dexterity', 'intelligence', 'strength', 'wisdom']) }
      state.allIds.push(characterId)
    })
  }
})

export const { setAttribute } = attributesSlice.actions

export default attributesSlice.reducer