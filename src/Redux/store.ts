import { combineReducers, createStore } from 'redux'
import characterSheet from './reducers/characterSheet'

const reducer = combineReducers({
  characterSheet
})

const store = createStore(reducer)

export type RootState = ReturnType<typeof reducer>

export default store