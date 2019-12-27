import { inventory } from '../../../testData/initialState'
import { createSlice } from '@reduxjs/toolkit'
import { createCharacter } from '../../newCharacterAction'


const inventorySlice = createSlice({
  name: 'inventory',
  initialState: inventory,
  reducers: {
    addItemToInventory(state, action: AppAction<ItemInstance>) {
      const { id, ...instance } = action.payload
      state.byId[id].inventory.push(instance)
    }
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { id } = action.payload
      state.byId[id] = { id, inventory: [] }
      state.allIds.push(id)
    })
  }
})

export const { addItemToInventory } = inventorySlice.actions

export default inventorySlice.reducer