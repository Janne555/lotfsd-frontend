import '@testing-library/jest-dom/extend-expect'
import React, { ReactNode } from 'react'
import { JssProvider } from 'react-jss'
import { render } from '@testing-library/react'

function AppWrapper({ children }: { children: ReactNode | ReactNode[] }): JSX.Element {
  return (
    <JssProvider disableStylesGeneration>
        {children}
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
  AppWrapper,
  renderWrapped
}