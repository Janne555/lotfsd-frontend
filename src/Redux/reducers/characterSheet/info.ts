import { createSlice } from '@reduxjs/toolkit'
import { characterSheet } from '../../../testData/initialState'

const { actions, reducer } = createSlice({
  name: 'info',
  initialState: characterSheet.info,
  reducers: {
    setAttackBonus(state, action: AppAction<{ value: number }>) {
      const { id, value } = action.payload
      if (id) {
        state.byId[id].attackBonus = value
      }
    },
    setCurrentHp(state, action: AppAction<{ value: number }>) {
      const { id, value } = action.payload
      if (id) {
        state.byId[id].currentHp = value
      }
    },
    setMaxHp(state, action: AppAction<{ value: number }>) {
      const { id, value } = action.payload
      if (id) {
        state.byId[id].maxHp = value
      }
    },
    setSurpriseChance(state, action: AppAction<{ value: number }>) {
      const { id, value } = action.payload
      if (id) {
        state.byId[id].surpriseChance = value
      }
    }
  }
})

export const { setAttackBonus, setCurrentHp, setMaxHp, setSurpriseChance } = actions

export default reducer