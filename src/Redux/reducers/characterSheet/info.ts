import { createSlice } from '@reduxjs/toolkit'
import { characterSheet } from '../../../testData/initialState'
import { createCharacter } from '../../specialActions'
import pick from 'lodash/pick'
import { CHARACTER_CLASSES } from '../../../constants/characterClasses'

const { actions, reducer } = createSlice({
  name: 'info',
  initialState: characterSheet.info,
  reducers: {
    setAttackBonus(state, action: AppAction<{ value: number }>) {
      const { characterId, value } = action.payload
      state.byId[characterId].attackBonus = value
    },
    setCurrentHp(state, action: AppAction<{ value: number }>) {
      const { characterId, value } = action.payload
      state.byId[characterId].currentHp = value
    },
    setMaxHp(state, action: AppAction<{ value: number }>) {
      const { characterId, value } = action.payload
      state.byId[characterId].maxHp = value
    },
    setSurpriseChance(state, action: AppAction<{ value: number }>) {
      const { characterId, value } = action.payload
      state.byId[characterId].surpriseChance = value
    }
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

export const { setAttackBonus, setCurrentHp, setMaxHp, setSurpriseChance } = actions

export default reducer