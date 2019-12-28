import { createAction } from '@reduxjs/toolkit'

const createCharacter = createAction<NewCharacterPayload>('createCharacter')

export {
  createCharacter
}