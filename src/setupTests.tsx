import '@testing-library/jest-dom/extend-expect'
import React, { ReactNode } from 'react'
import { JssProvider } from 'react-jss'
import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'
import { MemoryRouter } from 'react-router-dom'

type AppWrapperProps = {
  children: ReactNode | ReactNode[]
}

function AppWrapper({ children }: AppWrapperProps): JSX.Element {
  return (
    <MemoryRouter>
      <MockedProvider>
        <JssProvider disableStylesGeneration>
          {children}
        </JssProvider>
      </MockedProvider>
    </MemoryRouter>
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