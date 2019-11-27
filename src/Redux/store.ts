import { combineReducers, createStore } from 'redux'
import characterSheet from './reducers/characterSheet'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  characterSheet
})

const store = createStore(reducer, composeWithDevTools())

export default store

export {
  store,
  reducer
}