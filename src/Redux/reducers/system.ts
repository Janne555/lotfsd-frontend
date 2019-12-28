import { createSlice } from '@reduxjs/toolkit'
import { system } from '../../testData/initialState'
import { createCharacter, login } from '../specialActions'

const { reducer } = createSlice({
  name: 'system',
  initialState: system,
  reducers: {
  },
  extraReducers: acmBuilder => {
    acmBuilder
      .addCase(createCharacter, (state, action) => {
        const { characterId, name } = action.payload
        state.characters.byId[characterId] = name
        state.characters.byName[name] = characterId
      })
      .addCase(login, (state, { payload: { username, token, characters } }) => {
        state.token = token
        state.username = username
        state.characters = characters.reduce<{ byId: Record<string, string>, byName: Record<string, string> }>((result, character) => {
          result.byId[character.characterId] = character.info.name
          result.byName[character.info.name] = character.characterId
          return result
        }, { byId: {}, byName: {} })
      })
  }
})

// export const { } = savingThrowsSlice.actions

export default reducer