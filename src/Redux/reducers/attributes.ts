import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { attributes } from '../../testData/initialState'


const attributesSlice = createSlice({
  name: "attributes",
  initialState: attributes,
  reducers: {
    setAttribute(state, { payload: { attributeName, value } }: PayloadAction<{ attributeName: keyof Attributes, value: number }>) {
      state[attributeName] = value
    }
  }
})

export const { setAttribute } = attributesSlice.actions

export default attributesSlice.reducer