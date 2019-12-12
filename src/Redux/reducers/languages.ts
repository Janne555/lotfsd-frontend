import { createSlice } from '@reduxjs/toolkit'
import { languages } from '../../testData/initialState'


const languagesSlice = createSlice({
  name: "languages",
  initialState: languages,
  reducers: {
  }
})

// export const { } = languagesSlice.actions

export default languagesSlice.reducer