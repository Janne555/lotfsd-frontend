import { createSlice } from '@reduxjs/toolkit'

type UserData = {
  characters: {
    [name: string]: CharacterSheet
  }
}

const userSlice = createSlice({
  name: 'users',
  initialState: {},
  reducers: {

  }
})

// export const { } = savingThrowsSlice.actions

export default userSlice.reducer