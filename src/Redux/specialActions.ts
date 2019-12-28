import { createAction } from '@reduxjs/toolkit'

const createCharacter = createAction<NewCharacterPayload>('createCharacter')

const login = createAction<LoginPayload>('login')

export {
  createCharacter,
  login
}