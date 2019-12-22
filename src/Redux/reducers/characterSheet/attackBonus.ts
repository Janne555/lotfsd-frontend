import { createSlice } from '@reduxjs/toolkit'
import { attackBonus } from '../../../testData/initialState'

const attackBonusSlice = createSlice({
  name: 'attackBonus',
  initialState: attackBonus,
  reducers: {
    setAttackBonus(state, action: AppAction<AttackBonus>) {
      const { id, attackBonus } = action.payload
      if (id) {
        state.byId[id].attackBonus = attackBonus
      }
    }
  }
})

export const { setAttackBonus } = attackBonusSlice.actions

export default attackBonusSlice.reducer