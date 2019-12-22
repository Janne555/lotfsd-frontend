import { createSlice } from '@reduxjs/toolkit'
import { currentHp } from '../../../testData/initialState'

const currentHPSlice = createSlice({
  name: 'currentHP',
  initialState: currentHp,
  reducers: {
    setValue(state, action: AppAction<CurrentHp>) {
      const { id, currentHp } = action.payload
      if (id) {
        state.byId[id].currentHp = currentHp
      }
    }
  }
})

export const { setValue } = currentHPSlice.actions

export default currentHPSlice.reducer