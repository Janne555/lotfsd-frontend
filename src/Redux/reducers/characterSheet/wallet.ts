import { wallet } from '../../../testData/initialState'
import { createSlice } from '@reduxjs/toolkit'
import { createCharacter } from '../../specialActions'

const walletSlice = createSlice({
  name: 'wallet',
  initialState: wallet,
  reducers: {

  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { characterId, money } = action.payload
      state.byId[characterId] = {
        characterId,
        copper: 0,
        silver: Number(money),
        gold: 0
      }
      state.allIds.push(characterId)
    })
  }
})

// export const { } = walletSlice.actions

export default walletSlice.reducer