import { createSlice } from '@reduxjs/toolkit'
import { maxHp } from '../../../testData/initialState'

const maxHPSlice = createSlice({
  name: 'maxHP',
  initialState: maxHp,
  reducers: {
    setValue(state, action: AppAction<MaxHp>) {
      const { id, maxHp } = action.payload
      if (id) {
        state.byId[id].maxHp = maxHp
      }
    }
  }
})

export const { setValue } = maxHPSlice.actions

export default maxHPSlice.reducer