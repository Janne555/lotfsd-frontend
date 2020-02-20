import React from 'react'
import { JssProvider } from 'react-jss'
import { render, waitForDomChange } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import { LoginProvider } from './hooks'
import { APOLLO_MOCKS } from './testdata'

describe('<App />', () => {
  it('should match snapshot', async () => {
    const { asFragment } = render(
      <MemoryRouter>
        <LoginProvider>
          <MockedProvider mocks={APOLLO_MOCKS}>
            <JssProvider disableStylesGeneration>
              <App />
            </JssProvider>
          </MockedProvider>
        </LoginProvider>
      </MemoryRouter>
    )
    
    expect(asFragment()).toMatchSnapshot()
  });
});