import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { system } from '../../testData/initialState'
import { createCharacter } from '../specialActions'

const { reducer, actions } = createSlice({
  name: 'system',
  initialState: system,
  reducers: {
    beginLogin(state, action: PayloadAction<string>) {
      return {
        state: 'loggingIn',
        username: action.payload
      }
    },
    completeLogin(state, action: PayloadAction<string>) {
      if (state.state === 'loggingIn') {
        return {
          ...state,
          state: 'fetching',
          token: action.payload
        }
      }
    },
    completeDataFetch(state, action: PayloadAction<LoggedIn['characters']>) {
      if (state.state === 'fetching') {
        return {
          ...state,
          state: 'loggedIn',
          characters: action.payload
        }
      }
    },
    logout() {
      return {
        state: 'loggedOut'
      }
    },
  },
  extraReducers: acmBuilder => {
    acmBuilder
      .addCase(createCharacter, (state, action) => {
        const { characterId, name } = action.payload
        if (state.state === 'loggedIn') {
          state.characters.byId[characterId] = name
          state.characters.byName[name] = characterId
        }
      })
  }
})

export const { beginLogin, completeDataFetch, completeLogin, logout } = actions

export default reducer