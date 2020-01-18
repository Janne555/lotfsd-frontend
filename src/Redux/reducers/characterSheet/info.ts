import { createSlice } from '@reduxjs/toolkit'
import { characterSheet } from '../../../testData/initialState'
import { createCharacter } from '../../specialActions'
import pick from 'lodash/pick'
import { CHARACTER_CLASSES } from '../../../constants/characterClasses'

const { actions, reducer } = createSlice({
  name: 'info',
  initialState: characterSheet.info,
  reducers: {
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const partialInfo = pick(action.payload, ["characterId", "name", "class", "race", "age", "gender", "alignment", "player", "maxHp"])
      const { attackBonus, surpriseChance } = CHARACTER_CLASSES[action.payload.class]
      state.byId[action.payload.characterId] = Object.assign(
        partialInfo,
        { experience: 0, attackBonus, currentHp: partialInfo.maxHp, surpriseChance }
      )
      state.allIds.push(action.payload.characterId)
    })
  }
})

export default reducer