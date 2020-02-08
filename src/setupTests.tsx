import '@testing-library/jest-dom/extend-expect'
import React, { ReactNode } from 'react'
import { JssProvider } from 'react-jss'
import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'

function AppWrapper({ children }: { children: ReactNode | ReactNode[] }): JSX.Element {
  return (
    <MockedProvider>
      <JssProvider disableStylesGeneration>
        {children}
      </JssProvider>
    </MockedProvider>
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
  AppWrapper,
  renderWrapped
}