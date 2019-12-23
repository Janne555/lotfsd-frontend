import { createSlice } from '@reduxjs/toolkit'
import { attributes } from '../../../testData/initialState'
import { createCharacter } from '../../actions'
import { areOnlyAttributes } from '../../../services'


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
  extraReducers: acrBuilder => {
    acrBuilder.addCase(createCharacter, (state, action) => {
      const { id, alignment, class: className, name, race, gender, ...attributes } = action.payload
      if (!areOnlyAttributes(attributes))
        throw Error("Not attributes")
      state.byId[id] = { id, ...attributes }
    })
  }
})

export const { setAttribute } = attributesSlice.actions

export default attributesSlice.reducer