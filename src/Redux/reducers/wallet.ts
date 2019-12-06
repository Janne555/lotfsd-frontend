import { wallet } from '../../testData/initialState'
import { createSlice } from '@reduxjs/toolkit'

const walletSlice = createSlice({
  name: 'wallet',
  initialState: wallet,
  reducers: {

  }
})

export const { } = walletSlice.actions

export default walletSlice.reducer