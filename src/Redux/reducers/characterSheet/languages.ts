import { createSlice } from '@reduxjs/toolkit'
import { languages } from '../../../testData/initialState'
import { createCharacter } from '../../specialActions'


const languagesSlice = createSlice({
  name: "languages",
  initialState: languages,
  reducers: {
    addLanguage(state, { payload: { characterId, ...language } }: AppAction<Language>) {
      if (!state.byId[characterId].languages.some(l => l.name === language.name)) {
        state.byId[characterId].languages.push(language)
      }
    }
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { characterId } = action.payload
      state.byId[characterId] = { characterId, languages: [] }
      state.allIds.push(characterId)
    })
  }
})

export const { addLanguage } = languagesSlice.actions

export default languagesSlice.reducer