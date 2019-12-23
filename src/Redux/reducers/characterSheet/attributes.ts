import { createSlice } from '@reduxjs/toolkit'
import { attributes } from '../../../testData/initialState'
import { createCharacter } from '../../newCharacterAction'
import { areOnlyAttributes } from '../../../services'
import pick from 'lodash/pick'

const attributesSlice = createSlice({
  name: "attributes",
  initialState: attributes,
  reducers: {
    setAttribute(state, action: AppAction<{ attributeName: keyof Attributes, value: number }>) {
      const { id, attributeName, value } = action.payload
      if (id) {
        state.byId[id][attributeName] = value
      }
    }
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { id } = action.payload
      state.byId[id] = { id, ...pick(action.payload, ['charisma', 'constitution', 'dexterity', 'intelligence', 'strength', 'wisdom']) }
      state.allIds.push(id)
    })
  }
})

export const { setAttribute } = attributesSlice.actions

export default attributesSlice.reducer