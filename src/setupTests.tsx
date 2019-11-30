import '@testing-library/jest-dom/extend-expect'
import { combineReducers, createStore } from 'redux'
import characterSheet from './Redux/reducers/characterSheet'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { JssProvider } from 'react-jss'
import { render } from '@testing-library/react'

const reducer = combineReducers({
  characterSheet
})

const testStore = createStore(reducer)

jest.spyOn(testStore, 'dispatch').mockImplementation(() => { throw Error("Dont mutate store in tests") })



function AppWrapper({ children }: { children: ReactNode | ReactNode[] }): JSX.Element {
  return (
    <JssProvider disableStylesGeneration>
      <Provider store={testStore}>
        {children}
      </Provider>
    </JssProvider>
  )
}

function renderWrapped(element: JSX.Element) {
  return render(
    <AppWrapper>
      {element}
    </AppWrapper>
  )
}

export {
  testStore,
  AppWrapper,
  renderWrapped
}