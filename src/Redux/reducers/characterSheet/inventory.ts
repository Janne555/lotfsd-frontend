import { inventory } from '../../../testData/initialState'
import { createSlice } from '@reduxjs/toolkit'
import { createCharacter } from '../../specialActions'


const inventorySlice = createSlice({
  name: 'inventory',
  initialState: inventory,
  reducers: {
    addItemToInventory(state, action: AppAction<ItemInstance>) {
      const { characterId, ...instance } = action.payload
      state.byId[characterId].inventory.push(instance)
    }
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { characterId } = action.payload
      state.byId[characterId] = { characterId, inventory: [] }
      state.allIds.push(characterId)
    })
  }
})

export const { addItemToInventory } = inventorySlice.actions

export default inventorySlice.reducer