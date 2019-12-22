import { createSlice } from '@reduxjs/toolkit'
import { attributes } from '../../../testData/initialState'


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
  }
})

export const { setAttribute } = attributesSlice.actions

export default attributesSlice.reducer