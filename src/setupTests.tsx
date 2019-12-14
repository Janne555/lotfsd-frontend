import '@testing-library/jest-dom/extend-expect'
import { combineReducers, createStore } from 'redux'
import characterSheet from './Redux/reducers/characterSheet/characterSheet'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { JssProvider } from 'react-jss'
import { render } from '@testing-library/react'
import store from './Redux/store'


jest.spyOn(store, 'dispatch').mockImplementation(() => { throw Error("Dont mutate store in tests") })



function AppWrapper({ children }: { children: ReactNode | ReactNode[] }): JSX.Element {
  return (
    <JssProvider disableStylesGeneration>
      <Provider store={store}>
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
  store as testStore,
  AppWrapper,
  renderWrapped
}