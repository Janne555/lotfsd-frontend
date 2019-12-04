import { equipmentList } from '../../testData/initialState'
import { createSlice } from '@reduxjs/toolkit'


const equipmentListSlice = createSlice({
  name: 'equipmentList',
  initialState: equipmentList,
  reducers: {

  }
})

export const { } = equipmentListSlice.actions

export default equipmentListSlice.reducer