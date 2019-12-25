import { createSlice } from '@reduxjs/toolkit'
import { languages } from '../../../testData/initialState'
import { createCharacter } from '../../newCharacterAction'


const languagesSlice = createSlice({
  name: "languages",
  initialState: languages,
  reducers: {
    addLanguage(state, { payload: { id, ...language } }: AppAction<Language>) {
      if (!state.byId[id].languages.some(l => l.name === language.name)) {
        state.byId[id].languages.push(language)
      }
    }
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { id } = action.payload
      state.byId[id] = { id, languages: [] }
      state.allIds.push(id)
    })
  }
})

export const { addLanguage } = languagesSlice.actions

export default languagesSlice.reducer