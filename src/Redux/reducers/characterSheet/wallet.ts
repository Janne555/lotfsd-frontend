import { wallet } from '../../../testData/initialState'
import { createSlice } from '@reduxjs/toolkit'
import { createCharacter } from '../../newCharacterAction'

const walletSlice = createSlice({
  name: 'wallet',
  initialState: wallet,
  reducers: {

  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { id, money } = action.payload
      state.byId[id] = {
        id,
        copper: 0,
        silver: Number(money),
        gold: 0
      }
      state.allIds.push(id)
    })
  }
})

// export const { } = walletSlice.actions

export default walletSlice.reducer