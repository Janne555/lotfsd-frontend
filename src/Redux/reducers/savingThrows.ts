import { createReducer } from 'typesafe-actions'

const initialState: SavingThrows = {
  breathWeapon: 10,
  magic: 10,
  magicalDevice: 10,
  paralyze: 10,
  poison: 10
}

const savingThrowsReducer = createReducer(initialState)

export default savingThrowsReducer